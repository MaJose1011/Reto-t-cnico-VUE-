<!--
  
This Vue.js component consists of:

Template: It includes a single custom component <HelloWorld> with a message prop set to "Welcome to Your Vue.js App".
Script:
It imports the HelloWorld component from the file HelloWorld.vue.
The name property is set to 'App'.
The components object registers the HelloWorld component within this component.
This structure allows the HelloWorld component to be used within the App component.
-->

<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<!--
  
This Vue.js component consists of:

Template: It includes a single custom component <HelloWorld> with a message prop set to "Welcome to Your Vue.js App".
Script:
It imports the HelloWorld component from the file HelloWorld.vue.
The name property is set to 'App'.
The components object registers the HelloWorld component within this component.
This structure allows the HelloWorld component to be used within the App component.
-->

<style>
  #app {
    height: 100vh;
    background-color: #F8F8F8;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
</style>
