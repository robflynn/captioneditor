<script>
import CaptionList from "@lib/components/caption_list.vue"

const YTPlayer = require('yt-player')

export default {
  components: {
    CaptionList
  },

  mounted() {
    let url = 'https://www.youtube.com/watch?v=4IP_E7efGWE'

    let player = new YTPlayer("#player-render-area", {
      width: '100%'
    })

    player.load('4IP_E7efGWE')

    this.$root.$on('uiPlayVideo', () => {
      player.play()
    })
  },

  data() {
    return {
      captions: [
        {
          id: 1,
          text: "First Caption"
        },
        {
          id: 2,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 3,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 4,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 5,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 6,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 7,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 8,
          text: "Second Caption\nhas two lines."
        },
        {
          id: 9,
          text: "Second Caption\nhas two lines."
        },
      ]
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

      <CaptionList :captions="captions" />
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