<template>
  <div class="container" id="app">
    <HeaderRS/>
    <BodyRS/>
    <FooterRS/>
  </div>
</template>

<script>
import HeaderRS from './components/header.vue'
import BodyRS from './components/body.vue'
import FooterRS from './components/footer.vue'

export default {
  name: 'app',
  components: {
    HeaderRS, BodyRS, FooterRS
  }
}
</script>

<style>
section{
  margin-top: 35px;
}
h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
}
#app {
  font-family: "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
