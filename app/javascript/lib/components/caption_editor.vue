<script>
import Controls from "@lib/components/controls.vue"
import CaptioningView from "@lib/components/captioning_view.vue"

export default {
  components: {
    Controls,
    CaptioningView,
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