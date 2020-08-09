<script>
import CaptionEditor from "@lib/components/caption_editor.vue"

export default {
  components: {
    CaptionEditor
  },

  mounted() {
    console.log('app mounted')
  }
}
</script>

<template>
  <div class="caped-app">
    <CaptionEditor />
  </div>
</template>

<style>
html,body {
  width: 100%;
  height: 100%;
}

.caped-app {
  width: 100%;
  height: 100%;

  background: #444;
}
</style>