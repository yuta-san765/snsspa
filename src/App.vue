<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'normalize.css';
export default {};
</script>

<style lang="scss">
$color-action: #34aa22;
$text-light: #fff;
$text-dark: #000;
$color-border: #707070;
html {
  box-sizing: border-box;
}
html, body {
  height: 100%;
}
#app {
  font-family: 'Noto Sans','hiragino kaku gothic pro' ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  height: 100%;
}

</style>
