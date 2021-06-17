<template>
  <div>
    <!-- <h1 class="text-white text-center mt-4">Weather Forecast</h1>

    <b-form class="d-flex justify-content-center mt-5 mb-5">
      <b-col sm="6">
        <b-form-input
          v-model="searchValue"
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
          <b-card-title>Погода в <cite>{{ weather.cityName }}, {{ weather.country }} </cite></b-card-title>

          <b-card-text class="mt-3">
            <p class="b-card__temp mb-0"> {{ weather.temperature }}°C </p>
            <p class="fs-4"> {{ weather.description }} </p>
            <div class="fs-2 d-flex justify-content-around">
              <div>
                <p class="fs-5">Ощущается как:</p>
                <p class="fs-1"> {{ weather.fellsLike }} </p>
              </div>
              <div>
                <p class="fs-5">Влажность: </p>
                <p class="fs-1"> {{ weather.humidity }} </p>
              </div>
            </div>
          </b-card-text>

        </b-card>
      </b-col>
    </div> -->
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
                fellsLike: '16',
                humidity: '50'
            }
        }
    }
}
</script>

<style>

</style>