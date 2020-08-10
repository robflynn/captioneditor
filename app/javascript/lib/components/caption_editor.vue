<script>
import Controls from "@lib/components/controls.vue"
import CaptioningView from "@lib/components/captioning_view.vue"
import hokeys from "hotkeys-js"
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Controls,
    CaptioningView,
  },

  mounted() {
    let keybinds = {
      'ctrl+a': () => { this.insertNewCaption() }
    }

    let keys = Object.keys(keybinds)
    let keyList = keys.join(',')

    hotkeys(keyList, (event, handler) => {
      let callback = keybinds[handler.key]

      if (callback) { callback() }
    })
  },

  computed: {
    ...mapState([
      'captions'
    ])
  },

  methods: {
    ...mapActions([
      'insertCaption'
    ]),

    async insertNewCaption() {
      await this.insertCaption()

      let index = this.captions.length
      let element = document.querySelector(`[data-caption-index="${index - 1}"]`)

      element.scrollIntoView()

      this.$root.$emit('captionInserted', index - 1)
    }
  }
}
</script>

<template>
  <div class="captioneditor">
    <div class="col">
      <div class="row work-area">
        <CaptioningView />
      </div>
      <div class="row control-area">
        <Controls />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .captioneditor {
    width: 100%;
    height: 100%;

    & > .col {
      height: 100%;
    }
  }

  .work-area {
    flex: 80;
    max-height: 80%;

    background: #444;
  }

  .control-area {
    min-height: 125px;
    background: #444;
  }
</style>