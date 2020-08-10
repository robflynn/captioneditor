<script>
import { mapState } from "vuex"

const positionToTimecode = (position) => {
  console.log('--')
  var remainder = position
  console.log(remainder)

  let hours = Math.floor(remainder / 3600)
  remainder -= hours * 3600
  console.log(remainder)

  let minutes = Math.floor(remainder / 60)
  remainder -= minutes * 60
  console.log(remainder)

  let seconds = Math.floor(remainder)
  remainder -= seconds
  console.log(remainder)

  let frames = Math.floor((remainder * 29.97))

  const timecodeArray = [hours || 0, minutes || 0, seconds || 0, frames || 0]

  const zeroPaddedTimecodeArray = timecodeArray.map((number) => {
    if (number < 10) {
      return `0${number}`
    }

    return number
  })

  return zeroPaddedTimecodeArray.join(':')
}

export default {
  computed: {
    ...mapState([
      'playheadPosition',
      'duration'
    ]),

    playheadPercent() {
      let percent = ((this.playheadPosition / this.duration) * 100).toFixed(2)

      return percent
    },

    formattedPlayheadPosition() {
      return positionToTimecode(this.playheadPosition)
    },

    progressStyles() {
      return {
        "width": `${this.playheadPercent}%`
      }
    }
  },

  methods: {
    playClicked() { this.$root.$emit('uiPlayVideo') },
    pauseClicked() { this.$root.$emit('uiPauseVideo') },
    toggleMuteClicked() { this.$root.$emit("uiMuteVideo") },

    progressBarClicked($e) {
      let x = $e.x
      let bar = document.querySelector('.progressbar')
      let width = bar.clientWidth
      let percent = x / width
      let newPosition = percent * this.duration

      this.$root.$emit('uiSeekVideo', newPosition)
    },
  }
}
</script>

<template>
  <div class="col full-width">
    <div class="progressbar" @click="progressBarClicked">
      <div class="progress" :style="progressStyles"></div>
    </div>

    <div class="row controls full-width">
      <div class="button-group">
        <button type="button" @click="playClicked">Play</button>
        <button type="button" @click="pauseClicked">Pause</button>
        <button type="button" >Restart</button>
        <button type="button" >RR</button>
        <button type="button" >FF</button>
        <button type="button" @click="toggleMuteClicked">Mute</button>
      </div>
      <div>
        <div class="currentTime">
          {{ this.formattedPlayheadPosition }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progressbar {
  height: 20px;
  background: #555;
  width: 100%;
  cursor: pointer;

  .progress {
    background: red;
    height: 100%;
    width: 0%;
  }
}

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