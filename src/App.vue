<template>
  <HeadComponent msg="Hi, I'm Tiffany :)"/>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue'

export default {
  name: 'App',
  components: {
    HeadComponent
  }
}
</script>

<style>
html {
  height: 100%;
  background: #fff url('@/assets/construction-tape.png') no-repeat left bottom;
}
@media (max-width: 768px) {
  html {
    background-size: 150%;
  }
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #083830;
  margin-top: 60px;
}
</style>
