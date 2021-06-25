<template>
  <div>
    <v-app-bar
      dense
      light>
      <v-btn text color="secondary" to="/">Главная</v-btn>

      <v-menu offset-y>

        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ml-2"
            color="secondary"
            text
            v-bind="attrs"
            v-on="on">
            Избранное
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(city, index) in favoritesCities"
            :key="index">
            <v-list-item-title>
              <v-btn text @click="onClickFavoriteCity(city)"> {{ city }} </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>
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
  },
  methods: {
    onClickFavoriteCity(city) {
      this.$emit('on-click-favorite-city', city)
    }
  }
}
</script>

