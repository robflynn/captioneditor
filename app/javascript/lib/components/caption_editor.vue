<script>
import Controls from "@lib/components/controls.vue"

export default {
  components: {
    Controls
  }
}
</script>

<template>
  <div class="captioneditor">
    <div class="col">
      <div class="row work-area">
        <div>Left</div>
        <div>Right</div>
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
    background: green;
  }

  .control-area {
    flex: 125px;
    background: red;
  }
</style>