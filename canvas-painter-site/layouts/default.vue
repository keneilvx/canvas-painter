<template>
<div>
  <Navbar/>
  <Nuxt class="home-page"/>
  <Footer />
</div>
</template>

<script>
export default {
  name: "default.vue",
  head: {
    bodyAttrs: {
      class: 'home-page'
    }
  }
}
</script>

<style scoped>
.home-page{
  height: 100vh;
  min-height: 100%
}
</style>
