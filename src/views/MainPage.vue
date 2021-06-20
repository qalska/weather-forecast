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

            <p 
            v-if="cityNotFound"
            class="main-page__alert text-center">
              Город не найден!
            </p>
        </v-col>
      </v-row>

    <forecast-card 
      :weather="weather" 
      v-if="isShowForecastCard"/>

  </div>
</template>

<script>
import ForecastCard from "../components/ForecastCard.vue"

export default {
  components: { ForecastCard },
  data() {
    return {
      inputValue: '',
      isShowForecastCard: false,
      cityNotFound: false,
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
    showForecastCard(name) {
      if (this.weather.cityName.toLowerCase() === name) {
        this.isShowForecastCard = true
        this.cityNotFound = false
      }
      else {
        this.isShowForecastCard = false
      }
    },

    async fetchWeather() {
      const key = '198ebf0a933855cd1671c851f6e8ce19';
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&lang=ru&units=metric&appid=${key}`;

      try  {
        const res = await fetch(baseUrl);
        const weatherData = await res.json();

        this.inputValue = '';

        this.weather.cityName = weatherData.name;
        this.weather.country = weatherData.sys.country;
        this.weather.temperature = Math.round(weatherData.main.temp);
        this.weather.description = weatherData.weather[0].description;
        this.weather.feelsLike = Math.round(weatherData.main.feels_like);
        this.weather.humidity = weatherData.main.humidity;

        this.showForecastCard(weatherData.name.toLowerCase());
      }
      catch {
        this.cityNotFound = true;
        this.isShowForecastCard = false;
      }
    },
  },


}
</script>

<style lang="scss" scoped>
  .main-page{
    &__h2{
      font-size: 40px;
      letter-spacing: 0.25rem;
    }
    &__alert{
      font-size: 40px;
    }
  }
</style>