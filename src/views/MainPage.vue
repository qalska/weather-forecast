<template>
  <div class="main-page">
      <v-row align="center"
        justify="center">
        <v-col cols="7">
            <h1 class="main-page__h2 mt-6 text-center">Weather Forecast</h1>

            <v-form @submit.prevent="fetchWeather">
              <v-text-field
              v-model="inputValue"
              label="Введите название города">
              </v-text-field>
            </v-form>

        </v-col>
      </v-row>


    <forecast-card 
      :weather="weather"/>
  </div>
</template>

<script>
import ForecastCard from "../components/ForecastCard.vue"

export default {
  components: { ForecastCard },
  data() {
    return {
      inputValue: '',
      weather: {
        cityName: '',
        country: '',
        temperature: null,
        description: '',
        feelsLike: null,
        humidity: null
      },
    }
  },
  methods: {
    async fetchWeather() {
      const key = '198ebf0a933855cd1671c851f6e8ce19';
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&lang=ru&units=metric&appid=${key}`;

      const res = await fetch(baseUrl);
      const weatherData = await res.json();

      this.weather = weatherData

      this.weather.cityName = weatherData.name
      this.weather.country = weatherData.sys.country
      this.weather.temperature = Math.round(weatherData.main.temp)
      this.weather.description = weatherData.weather[0].description
      this.weather.feelsLike = Math.round(weatherData.main.feels_like)
      this.weather.humidity = weatherData.main.humidity
    },
  },


}
</script>

<style scoped>
  .main-page__h2{
    font-size: 40px;
    letter-spacing: 0.25rem;
  }
</style>