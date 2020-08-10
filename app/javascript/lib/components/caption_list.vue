<script>
import { mapState } from "vuex"
import CaptionBlock from "@lib/components/caption_block.vue"

export default {
  props: {
    classes: {
      type: String,
      default: null
    },
  },

  components: {
    CaptionBlock
  },

  computed: {
    ...mapState([
      'captions'
    ])
  }
}
</script>

<template>
  <ul class="caption-list" :classes="classes" aria-label="caption list">
    <CaptionBlock v-for="(caption, index) in captions" :key="caption.id" :class="caption-row" :index="index + 1" :caption="caption" />
  </ul>
</template>

<style lang="scss" scoped>
  li {
    margin-bottom: 10px;
    margin-right: 10px;
  }
</style>