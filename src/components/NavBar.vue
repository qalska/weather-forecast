<template>
  <div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <router-link tag="b-nav-item" to="/">Главная</router-link>

            <b-nav-item-dropdown text="Избранное" right>
                <!-- <b-dropdown-item href="#">EN</b-dropdown-item> -->
            </b-nav-item-dropdown>

         </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .router-link {
    text-decoration: none;
  }
</style>
