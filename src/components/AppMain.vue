<script>
import {store} from '../store.js'

import movieItem from './movieItem.vue';
import tvSeriesItem from './tvSeriesItem.vue';

export default {
    name: 'AppMain',

    data() {
        return {
          store,
      }
    },

    components: {
        movieItem,
        tvSeriesItem
    },

}

</script>

<template>
    <div class="container-main my-5">
        
        <h2 class="text-white">film</h2>
        <div class="d-flex flex-wrap justify-content-between">
            <movieItem v-for="currentCard in store.movies" 
                :movie="currentCard"></movieItem>
        </div>

        <h2 class="text-white">tv series</h2>
        <div class="d-flex flex-wrap justify-content-between">
            <tvSeriesItem v-for="currentCard in store.tv" 
                :tvSeries="currentCard"></tvSeriesItem>
        </div>
    </div>
</template>

<style lang="scss">

    container-main {

        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        background-color: rgb(65, 51, 51);
        color: rgb(0, 0, 0);
    }
</style>
