<template>
  <div class="main-page">
      <v-row align="center"
        justify="center">
        <v-col cols="7">
            <h1 class="main-page__h2 mt-6 text-center">Weather Forecast</h1>

            <v-autocomplete
              v-model="autocompleteValue"
              :items="cities"
              label="Введите город">
            </v-autocomplete>

        </v-col>
      </v-row>


    <forecast-card />
  </div>
</template>

<script>
import ForecastCard from "../components/ForecastCard.vue"

export default {
  components: { ForecastCard },
  data() {
    return {
      cities: ['asd', 'qwe', '123'],
      autocompleteValue: null,
    }
  }
}
</script>

<style scoped>
  .main-page__h2{
    font-size: 40px;
    letter-spacing: 0.25rem;
  }
</style>