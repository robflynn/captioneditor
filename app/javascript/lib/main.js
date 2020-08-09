import Vue from 'vue/dist/vue.esm'
import Vuex from "vuex"
import App from '@lib/app.vue'

import "@lib/styles/global.scss"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videoId: '4IP_E7efGWE'
  },

  mutations: {
  },

  actions: {
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