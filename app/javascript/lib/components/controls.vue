<script>
export default {
  methods: {
    playClicked() {
      this.$root.$emit('uiPlayVideo')
    }
  }
}
</script>

<template>
  <div class="row controls full-width">
    <div class="button-group">
      <button type="button" @click="playClicked">Play</button>
      <button type="button" >Restart</button>
      <button type="button" >RR</button>
      <button type="button" >FF</button>
    </div>
    <div>
      <div class="currentTime">
        00:00:00;00
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.currentTime {
  background: #000;
  border-radius: 15px;
  color: #eee;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  line-height: 150px;
  padding: 10px;
}
  .controls {
    display: flex;
    flex-direction: row;

    & > * {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .button-group {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>