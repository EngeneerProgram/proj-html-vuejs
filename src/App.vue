<template>
  <div id="app">
    
   <MainComponent/>
   <FooterComponent/>
    
    
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'

import MainComponent from "./components/MainComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"


export default {
  name: 'App',
  components: {
    MainComponent,
    FooterComponent
}
}
</script>

<style lang="scss">
@import "./assets/style.scss"
</style>
