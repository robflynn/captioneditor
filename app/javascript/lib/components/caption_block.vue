<script>
import "element-closest"
import { mapActions } from "vuex"

export default {
  props: {
    classes: {
      type: String,
      default: null
    },

    caption: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    onClick: {
      type: Function,
      required: false,
    },

    selected: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    ...mapActions([
      'setSelectedCaption'
    ]),

    clicked($e) {
      let block = $e.target.closest('.caption')
      let index = parseInt(block.dataset.captionIndex)

      this.setSelectedCaption(index)
    },

    onInput($e) {
      let target = $e.target
      let lines = []
      let children = target.childNodes

      for (var i = 0; i < children.length; i++) {
        let node = children[i]

        if (node.nodeType == Node.TEXT_NODE) {
          lines.push(node.nodeValue)
        } else {
          lines.push(node.innerHTML)
        }
      }

      let content = lines.join("\n")

      this.$root.$emit('uiUpdateCaptionPreview', content)
    }
  }
}
</script>

<template>
  <li :class="this.classes">
    <div class="caption" @click="clicked" tabindex="0" aria-label="caption block" :data-caption-index="index">
      <header>
        <span class="index">{{ index + 1}}</span>
        <div class="buttons" aria-label="caption options">
          <button type="button">X</button>
        </div>
      </header>
      <div class="caption--content" :contenteditable="this.selected" :data-selected="this.selected" @input="onInput" v-html="caption.text"></div>
      <footer>
        <span class="in-time">00:00:00:00</span>
        <span class="out-time">00:00:00:00</span>
      </footer>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  $padding: 5px;
  $radius: $padding;
  $captionBackground: #777;

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
      color: #e5e5e5;

      &[contenteditable=true] {
        background: white;
        padding: 10px;
        color: #444;
      }
    }

    footer {
      margin-top: 10px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: $padding;
      padding-left: $padding * 2;
      padding-right: $padding * 2;

      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1.0em;

      .in-time {
        color: #00ee00;
      }

      .out-time {
        color: #df0000;
      }
    }
  }
</style>