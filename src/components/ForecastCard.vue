<template>
    <v-container>
        <v-row align="center"
            justify="center">
            <div class="card">
                <div>
                    <v-row align="center"
                    justify="center">
                        <h2 class="font-weight-bold mt-6 card__h2">
                            Погода в <span class="font-italic"> {{ weather.cityName }}, {{ weather.country }} </span>
                        </h2>
                        <v-btn class="mt-5 ml-8"
                        @click="onAddToFavorites(weather.cityName)" 
                        icon text>
                            <v-icon 
                            size="50" v-if="btnNotClicked"> 
                                {{ icons.mdiHeartOutline }} 
                            </v-icon>
                            <v-icon 
                            size="50" v-if="!btnNotClicked"> 
                                {{ icons.mdiHeart }} 
                            </v-icon>
                        </v-btn>
                    </v-row>

                    <p class="card__temp"> {{ weather.temperature }}°C </p>
                    <p class="card__desc m-0"> {{ weather.description }} </p>

                    <v-row
                        class="mt-8"
                        align="center"
                        justify="space-around">
                        <div>
                            <p class="card__additions-desc mb-0">Ощущается как:</p>
                            <p class="card__additions-data"> {{ weather.feelsLike }}°C </p>
                        </div>

                        <div>
                            <p class="card__additions-desc mb-0">Влажность: </p>
                            <p class="card__additions-data"> {{ weather.humidity }}% </p>
                        </div>
                    </v-row>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from '@mdi/js';

export default {
    props: {
        weather: {
            type: Object,
            required: true,
            default: () => {}
        },
        favoritesCities: {
            type: Array,
            required: false,
            default: () => []
        },
        btnNotClicked: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            icons: {
                mdiHeartOutline,
                mdiHeart
            },
        }
    },
    methods: {
        onAddToFavorites(cityName) {
            this.$emit('on-add-to-favorites', cityName)
        },
    }
}
</script>

<style lang="scss" scoped>
    .card{
        text-align: center;
        &__h2{
            font-size: 35px;
        }
        &__temp{
            font-size: 100px;
        }
        &__desc{
            font-size: 35px;
            text-transform: capitalize;
        }
        &__additions-data{
            font-size: 25px;
        }
    }
</style>