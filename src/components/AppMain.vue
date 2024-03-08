<script>
import {store} from '../store.js'
import axios from 'axios';

import CardItem from './CardItem.vue';
import AppOverlay from './AppOverlay.vue'

export default {
    name: 'AppMain',

    data() {
        return {
          store,
          showOverlay: false,
          castList : '',
          genres : '',
      }
    },

    components: {
       CardItem,
       AppOverlay,
    },

    methods: {

    openOverlay(card) {
      this.store.selectedCard = card;
      this.showOverlay = true;
    },

    closeOverlay() {
         this.store.selectedCard = null;
        this.showOverlay = false;
    },
  },

}

</script>

<template>

    <div class="container-main my-5">
      <h2 v-if="store.movies.length != 0" class="text-white">MOVIES</h2>
      <div class="d-flex flex-wrap">
        <CardItem
          v-for="currentCard in store.movies"
          :key="currentCard.id"
          :card="currentCard"
          v-show="!currentCard.genre_ids.indexOf(store.movieGenreFilter)"
          @click="openOverlay(currentCard)"
        ></CardItem>
      </div>
  
      <h2 v-if="store.tv.length != 0" class="text-white mt-5">TV SERIES</h2>
      <div class="d-flex flex-wrap">
        <CardItem
          v-for="currentCard in store.tv"
          :key="currentCard.id"
          :card="currentCard"
          v-show="!currentCard.genre_ids.indexOf(store.tvGenreFilter)"
          @click="openOverlay(currentCard)"
        ></CardItem>
      </div>
  
      <AppOverlay v-if="showOverlay" @close="closeOverlay()" >
      </AppOverlay>

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
