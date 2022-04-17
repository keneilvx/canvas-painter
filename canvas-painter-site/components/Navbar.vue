<template>
  <div>
    <!-- Image and text -->
    <b-navbar class="navbar-site"  >
      <b-navbar-brand href="#">
        <h4>Canvas-painter</h4>

      </b-navbar-brand>
      <!-- Right aligned nav items -->
<!--      <b-navbar-nav class="ml-auto">-->
<!--        <b-nav-form>-->
<!--          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--        </b-nav-form>-->




<!--      </b-navbar-nav>-->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

  h4{
    font-family: 'Shadows Into Light', cursive;
    color: #FFFFFF;
  }
  .navbar-site{
    background-color: #1e3899;
    /*border: 1px solid;*/
    /*padding: 10px;*/

    z-index: 9999;
    box-shadow: -1px 1px 8px #888888;;
  }

</style>
