<template>
  <div id="app">
    <HelloWorld style="width: 500px; height: 500px; background:#000;" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/validation'

export default {
    provide: {
        dragEventFn: function (flag) {
            console.log(flag)
        }
    },
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
