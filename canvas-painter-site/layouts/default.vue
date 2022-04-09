<template>
<div>
  <Navbar/>
  <Nuxt class=""/>
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
