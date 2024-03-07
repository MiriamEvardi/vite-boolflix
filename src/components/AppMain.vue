<script>
import {store} from '../store.js'

import CardItem from './CardItem.vue';

export default {
    name: 'AppMain',

    data() {
        return {
          store,
      }
    },

    components: {
       CardItem,
    },

}

</script>

<template>
    <div class="container-main my-5">
        
        <h2 class="text-white">film</h2>
        <div class="d-flex flex-wrap justify-content-between">
            <CardItem v-for="currentCard in store.movies" 
                :card="currentCard"></CardItem>
        </div>

        <h2 class="text-white">tv series</h2>

        <div class="d-flex flex-wrap justify-content-between">
            <CardItem v-for="currentCard in store.tv" 
                :card="currentCard">
           </CardItem>
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
