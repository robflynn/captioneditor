<script>
import CaptionList from "@lib/components/caption_list.vue"

export default {
  components: {
    CaptionList
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
    <div>Left</div>
    <div class="full-height col">
      <div>
        Font controls and stuff here
      </div>

      <CaptionList :captions="captions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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