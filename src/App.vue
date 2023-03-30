<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",

  components: {
    AppHeader
  },
};
</script>

<template>
  
  <AppHeader/>

  <router-view/>

</template>

<style lang="scss">
@use "./styles/app.scss";

body {
  background-color: #EDEDED;
}
</style>
