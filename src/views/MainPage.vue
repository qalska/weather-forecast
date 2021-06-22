<template>
  <div class="main-page">
    <nav-bar 
    :favoritesCities="favoritesCities" />
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
      @on-add-to-favorites="onAddToFavorites"
      :weather="weather"
      :btnNotClicked="btnNotClicked"
      v-if="isShowForecastCard"/>

  </div>
</template>

<script>
import ForecastCard from "../components/ForecastCard.vue"
import NavBar from "../components/NavBar.vue";
import { key } from "../helpers/consts.js"

export default {
  components: { ForecastCard, NavBar },
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
      favoritesCities: [],
      btnNotClicked: true
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

    onAddToFavorites(cityName) {
      this.btnNotClicked = !this.btnNotClicked;

      let clonedfavoritesCities = [...this.favoritesCities];

      if (!this.btnNotClicked) {
        clonedfavoritesCities.push(cityName)
      } else {
        clonedfavoritesCities.splice(cityName)
      }

      this.favoritesCities = clonedfavoritesCities;
    },

    formatFetchingWeatherData(data) {
      return {
        ...this.weather, 
        cityName: data.name, 
        country: data.sys.country, 
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity
      };
    },

    async fetchWeather() {
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&lang=ru&units=metric&appid=${key}`;

      const res = await fetch(baseUrl);
      const weatherData = await res.json();

      try  {
        this.weather = this.formatFetchingWeatherData(weatherData);

        this.inputValue = '';

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