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

      let body = document.querySelector(`[data-caption-index="${index}"] .caption--content`)
      body.setAttribute('tabIndex', 0)

      // not sure why this works, look it up later
      setTimeout(() => { body.focus() }, 0)
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