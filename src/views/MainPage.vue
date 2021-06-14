<template>
  <div>
    <h1 class="text-white text-center mt-4">Weather Forecast</h1>
    <b-form class="d-flex justify-content-center mt-5 mb-5">
      <b-col sm="6">
        <b-form-input
          v-model="searchValue"
          :type="text"
          size="lg"
          placeholder="Введите название города">
        </b-form-input>
      </b-col>
    </b-form>
    <div class="d-flex justify-content-center mt-5 mb-5">
      <b-col sm="7">
        <b-card bg-variant="dark" 
          text-variant="white" 
          border-variant="secondary"
          align="center">
          <b-card-title>Погода в <cite>Source Title</cite></b-card-title>
          <b-card-text class="mt-3">
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
        </b-card>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      weather: {
        cityName: 'Санкт-Петербург',
        country: 'Россия',
        temperature: 18,
        description: 'Облачно',
        minTemp: '14',
        maxTemp: '22',
        fellsLike: '16',
      }
    }
  }
}
</script>

<style>

</style>