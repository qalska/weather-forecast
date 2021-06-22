<template>
  <div>
      <ul>
          <li v-for="(city, idx) in favoritesCities"
            :key="idx">

          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        favoritesCities: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>

<style>

</style>