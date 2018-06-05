import Vue from 'vue'
import App from './App.vue'


Vue.component('todo-item', {
  props: ['todo'],
  template: '<div class="box">{{ todo.text }}</div>'
})

var app7 = new Vue({
  el: '#app',
  data: {
    menu: [
      { id: 0, text: 'About' },
      { id: 1, text: "作ったもの" },
      { id: 1, text: "経歴" },
    ]
  },
  methods: {
    a: function () {
      this.menu[0].text = "こんにちは"
      this.menu[1].text = "ぽきた"
      this.menu[2].text = "ぽやしみ"
      this.menu[3].text = "ぽはよう"
    }
  }
})



