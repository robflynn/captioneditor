<script>
import CaptionList from "@lib/components/caption_list.vue"
import { mapState, mapActions } from "vuex"
import { Position } from "@lib/types.ts"

const YTPlayer = require('yt-player')

export default {
  components: {
    CaptionList
  },

  computed: {
    ...mapState([
      'videoId',
      'selectedCaption',
      'captions'
    ]),

    currentCaption() {
      if (this.captions.length == 0) { return null }
      let caption = this.captions[this.selectedCaption]

      return caption
    },

    currentCaptionText() {
      if (this.currentCaption) {
        return this.currentCaption.text.replace("\n", '<br>')
      }
    },

    captionPreviewPositionClasses() {
      let classes = []
      let caption = this.currentCaption

      if (caption.horizontal == Position.center) {
        classes.push('cuebox--center')
      }

      if (caption.horizontal == Position.left) {
        classes.push('cuebox--start')
      }

      if (caption.horizontal == Position.right) {
        classes.push('cuebox--end')
      }

      if (caption.vertical == Position.bottom) {
        classes.push('cuebox--bottom')
      }

      if (caption.vertical == Position.top) {
        classes.push('cuebox--top')
      }

      return classes.join(' ')
    }
  },

  methods: {
    ...mapActions([
      'setPlayheadPosition',
      'setDuration',
    ])
  },

  watch: {
    videoId() {
      this.player.load(this.videoId)
    }
  },

  mounted() {
    this.player = new YTPlayer("#player-render-area", {
      width: '100%'
    })

    let lastValue = 0

    setInterval(() => {
      let position = this.player.getCurrentTime()

      if (position != lastValue) {
        this.setPlayheadPosition(position)
        lastValue = position
      }
    }, 100)

    this.player.load(this.videoId)

    this.player.on('playing', () => {
      let duration = this.player.getDuration()

      this.setDuration(duration)
    })

    this.$root.$on('uiPlayVideo', () => {
      this.player.play()
    })

    this.$root.$on('uiMuteVideo', () => {
      if (this.player.isMuted()) {
        this.player.unMute()
      } else {
        this.player.mute()
      }
    })

    this.$root.$on('uiPauseVideo', () => {
      this.player.pause()
    })

    this.$root.$on('uiTogglePlayPause', () => {
      let state = this.player.getState()

      if (state == 'playing') {
        this.player.pause()
      } else {
        this.player.play()
      }
    })

    this.$root.$on('uiSeekVideo', (position) => {
      this.player.seek(position)
    })

    this.$root.$on('uiUpdateCaptionPreview', (text) => {
    })
  },

  data() {
    return {
      player: null,
    }
  }
}
</script>

<template>
  <div class="row captioning-view">
    <div class="player-area">
      <h1>The Name Of The Video</h1>

      <div class="player-wrapper">
        <div id="player-render-area">
        </div>
        <div class="caption-preview-overlay" v-if="currentCaptionText">
          <div class="cuebox" :class="captionPreviewPositionClasses">
            <div class="cue"><span v-html="currentCaptionText"></span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="full-height col">
      <div class="button-bar" aria-label="caption styling">
        <button>Left</button>
        <button>Center</button>
        <button>Right</button>
        <button>Bold</button>
        <button>Italic</button>
        <button>Underline</button>
      </div>

      <CaptionList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player-wrapper {
  position: relative;

  .caption-preview-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 10px;
    z-index: 1;

    .cuebox {
      position: absolute;
      width: 100%;

      &--bottom {
        bottom: 10px;
      }

      &--top {
        top: 10px;
      }

      &--start {
        text-align: left;
      }

      &--end {
        text-align: right;
        right: 10px;
      }

      &--middle {
        margin: auto 0;
      }

      &--center {
        text-align: center;
      }
    }

    .cue {
      display: inline;

      span {
        padding-left: 15px;
        padding-right: 15px;
        background: black;
        color: white;
        font-family: monospace;
        font-size: 16pt;
      }
    }
  }
}

.player-area {
  margin: 10px;
}

#player-render-area {
  width: 100%;
}

.button-bar {
  padding: 10px;
}
.captioning-view {
  width: 100%;

  & > div {
    flex: 50;
  }

  div:first-child {
    min-width: 150px;
  }

  .caption-list {
    overflow-y: auto;
  }
}
</style>