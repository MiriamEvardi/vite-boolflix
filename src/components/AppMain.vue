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
    <ul>
        <CardItem v-for="currentCard in store.movies" 
            :movie="currentCard"></CardItem>
    </ul>
</template>

<style lang="scss">

    ul {
        list-style-type: none;

        display: flex;
        flex-direction: column;
        gap: 20px;

        background-color: white;
        color: black;
    }
</style>
