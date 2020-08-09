<script>
export default {
}
</script>

<template>
  <div class="row captioning-view">
    <div>Left</div>
    <div>Right</div>
  </div>
</template>

<style lang="scss" scoped>
.captioning-view {
  width: 100%;

  background: purple;

  & > div {
    flex: 50;
  }

  div:first-child {
    min-width: 150px;
  }
}
</style>