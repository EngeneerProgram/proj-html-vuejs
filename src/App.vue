<template>
  <div id="app">
   <MainComponent/>
    
    <footer></footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import MainComponent from "./components/MainComponent.vue"


export default {
  name: 'App',
  components: {
    MainComponent,
   
}
}
</script>

<style lang="scss">
@import "./assets/style.scss"
</style>
