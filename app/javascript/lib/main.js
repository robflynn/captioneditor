import Vue from 'vue/dist/vue.esm'
import Vuex from "vuex"
import App from '@lib/app.vue'
import "@lib/styles/global.scss"
import { createCaption } from '@lib/factory'
import { Position } from '@lib/types.ts'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videoId: 'aqz-KE-bpKQ',
    playheadPosition: 0,
    duration: 0,
    selectedCaption: 0,
    captions: [
      createCaption("¡Hola!", { inTime: "0", outTime: "10"}),
      createCaption('¿Como estas?', { vertical: Position.top }),
      createCaption('♪', { vertical: Position.top, horizontal: Position.right }),
      createCaption('What are we\ngoing to do today?')
    ]
  },

  mutations: {
    setPlayheadPosition(state, position) {
      state.playheadPosition = position
    },

    setDuration(state, duration) {
      state.duration = duration
    },

    insertCaption(state, caption) {
      state.captions.push(caption)
    },

    setSelectedCaption(state, index) {
      state.selectedCaption = index
    }
  },

  actions: {
    setPlayheadPosition({ commit }, position) {
      commit('setPlayheadPosition', position)
    },

    setDuration({ commit }, duration) {
      commit('setDuration', duration)
    },

    insertCaption({ commit, state }, options = {}) {
      let caption = createCaption(options.text, options)

      commit('insertCaption', caption)

      return caption
    },

    setSelectedCaption({ commit }, index) {
      console.log('setting it', index)
      commit('setSelectedCaption', index)
    }
  }
})

function renderComponent(selector, component) {
  var element = document.querySelector(selector)

  if (element != undefined) {
    new Vue({
      el: element,
      render: h => h(component),
      store
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#caped', App)
})