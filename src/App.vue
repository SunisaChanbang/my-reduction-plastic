<template>
  <div id="app">
    <Home firebase/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      title: 'DADADA'
    }
  },
  methods: {
    handleClick() {
      console.log('chill');
  }
}
}
</script>

<style scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
