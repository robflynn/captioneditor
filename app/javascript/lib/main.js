import Vue from 'vue/dist/vue.esm'
import Vuex from "vuex"
import App from '@lib/app.vue'
import "@lib/styles/global.scss"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videoId: 'aqz-KE-bpKQ',
    playheadPosition: 0,
    duration: 0,
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
  },

  mutations: {
    setPlayheadPosition(state, position) {
      state.playheadPosition = position
    },

    setDuration(state, duration) {
      state.duration = duration
    }
  },

  actions: {
    setPlayheadPosition({ commit }, position) {
      commit('setPlayheadPosition', position)
    },

    setDuration({ commit }, duration) {
      commit('setDuration', duration)
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