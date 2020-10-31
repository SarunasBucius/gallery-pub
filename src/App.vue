<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view :key="$route.name + ($route.params.id || '')" />
  </div>
</template>
<script>
import MainNav from '@/components/TopNav'

export default {
  name: 'app',
  components: {
    MainNav
  }
}
</script>
<style lang="scss">
// remove outline from links in firefox
a {
  outline: none;
}
html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: var(--cursive-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
:root {
  --cursive-font: 'Poiret One', Courier, monospace;
  --text-color-on-bg: black;
  --bg-color: #84a8ad;
}
.js-clipped {
  position: fixed;
  overflow-y: scroll !important;
  height: calc(100% + 1px);
  width: 100%;
}
.background {
  position: fixed;
  top: 0;
  height: 100vh;
  left: 0;
  width: 100%;
  background-color: var(--bg-color);
  background-size: cover;
  z-index: -1;
}
</style>
