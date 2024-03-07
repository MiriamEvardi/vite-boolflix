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
        CardItem
    },

}

</script>

<template>
    <div class="container-main my-5">
        <ul>
            <CardItem v-for="currentCard in store.movies" 
                :movie="currentCard"></CardItem>
        </ul>
    </div>
</template>

<style lang="scss">

    ul {
        list-style-type: none;

        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        background-color: rgb(197, 68, 68);
        color: black;
    }
</style>
