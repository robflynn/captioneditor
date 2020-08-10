<script>
import CaptionList from "@lib/components/caption_list.vue"
import { mapState, mapActions } from "vuex"

const YTPlayer = require('yt-player')

export default {
  components: {
    CaptionList
  },

  computed: {
    ...mapState(['videoId'])
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

    this.$root.$on('uiSeekVideo', (position) => {
      this.player.seek(position)
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

      <div id="player-render-area">
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