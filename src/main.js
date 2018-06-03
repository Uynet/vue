import Vue from 'vue'
import App from './App.vue'

const createApp = _=>{
  return new Vue({
    e1: "#app",
    data:{
      message:"Hello unko"
    }
  })
}

if(typeof window !== "Undefined"){
  createApp().$mount("#app")
}
else if(typeof module !== "undefined" && module.exports){
  module.exports = createApp;
}


