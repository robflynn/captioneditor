import Vue from 'vue/dist/vue.esm'
import App from '@lib/app.vue'

import "@lib/styles/global.scss"

function renderComponent(selector, component) {
  var element = document.querySelector(selector)

  if (element != undefined) {
    new Vue({
      el: element,
      render: h => h(component)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#caped', App)
})