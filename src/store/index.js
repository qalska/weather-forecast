import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autocompleteValue: '',
    weather2: {
      cityName: 'Санкт-Петербург',
      country: 'Россия',
      temperature: 18,
      description: 'Облачно',
      fellsLike: '16',
      humidity: '50'
    },
    weather: {}

  },
  actions: {
    async fetchWeather(ctx) {
      const key = '198ebf0a933855cd1671c851f6e8ce19';
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.autocompleteValue}&lang=ru&units=metric&appid=${key}`;

      const res = await fetch(baseUrl);
      const weather = await res.json()

      ctx.commit('updateWeather', weather)

    }
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather
    }
  },
  getters: {
    getWeather(state) {
      return state.weather
      console.log(this.weather)
      console.log(state.weather)
    }
  }
})
