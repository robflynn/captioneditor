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
    <div class="full-height">
      <ul class="caption-list full-height scroll-y">
        <li v-for="(caption, index) in this.captions" :key="caption.id" class="caption-row">
          <div class="caption">
            <header>
              <span class="index">{{ index + 1}}</span>
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
$padding: 5px;
$radius: $padding;
$captionBackground: gray;

.captioning-view {
  width: 100%;

  background: purple;

  & > div {
    flex: 50;
  }

  div:first-child {
    min-width: 150px;
  }

  .caption-list {
    background: orange;

    li {
      margin: 5px;
    }

    .caption {
      background: $captionBackground;
      border-radius: $radius;
      padding: $radius * 2;

      header {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;

        .index {
          background: skyblue;
          color: 444;
          padding: $padding;
          font-size: 0.9em;
          width: 15px;
          text-align: center;
        }

        .buttons {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          width: 100%;

          button {
            border: none;
            background: none;
            padding: $padding;
            cursor: pointer;
          }
        }
      }

      &--content {
        padding: $padding;
        padding-left: 40px;
      }

      footer {
        margin-top: 10px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: $padding;
        padding-left: $padding * 2;
        padding-right: $padding * 2;

        .in-time {
          color: green;
        }

        .out-time {
          color: red;
        }
      }
    }
  }
}
</style>