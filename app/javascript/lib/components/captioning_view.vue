<script>
export default {
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
        }
      ]
    }
  }
}
</script>

<template>
  <div class="row captioning-view">
    <div>Left</div>
    <div>
      <ul class="caption-list">
        <li v-for="caption in this.captions" :key="caption.id" class="caption-row">
          <div class="caption">
            <header>
              <span class="index">N</span>
              <div class="buttons">
                <button type="button">X</button>
              </div>
            </header>
            <div class="caption--content">
              {{ caption.text }}
            </div>
            <footer>
              <span class="in-time">00:00:00:00</span>
              <span class="out-time">00:00:00:00</span>
            </footer>

          </div>
        </li>
      </ul>
    </div>
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