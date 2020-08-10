<script>
import { mapState, mapActions } from "vuex"
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
      'captions',
      'selectedCaption'
    ])
  },

  mounted() {
    this.$root.$on('captionInserted', (index) => {
      this.setSelectedCaption(index)
    })
  },

  methods: {
    ...mapActions([
      'setSelectedCaption'
    ]),
  }
}
</script>

<template>
  <ul class="caption-list" :classes="classes" aria-label="caption list">
    <CaptionBlock v-for="(caption, index) in captions" :key="caption.id" classes="caption-row" :index="index" :caption="caption" :selected="index == selectedCaption" />
  </ul>
</template>

<style lang="scss" scoped>
  li {
    margin-bottom: 10px;
    margin-right: 10px;
  }
</style>