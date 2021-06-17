<template>
  <div>
    <v-row align="center"
      justify="center">
      <div>
        <h1 class="mt-6">Weather Forecast</h1>

        <v-col cols="20">
          <v-autocomplete
            v-model="autocompleteValue"
            :items="cities"
            label="Введите город">
          </v-autocomplete>
        </v-col>

      </div>
    </v-row>

    <forecast-card />
  </div>
</template>

<script>
import ForecastCard from "../components/ForecastCard.vue"

export default {
  components: { ForecastCard }
}
</script>

<style scoped>
</style>