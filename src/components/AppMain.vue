<script>
import {store} from '../store.js'

import CardItem from './CardItem.vue';

export default {
    name: 'AppMain',

    data() {
        return {
          store,
          showOverlay: false,
          selectedCard: null,
          castList : '',
          genres : '',


          countryFlags: {
                'en': '/img/en-flag.jpg',
                'it': '/img/it-flag.jpg',
                'ko': '/img/kr-flag.jpg',
                'ja': '/img/jp-flag.jpg',
                'cn': '/img/cn-flag.jpg'
            },
      }
    },

    components: {
       CardItem,
    },

    created() {
        if (this.selectedCard) {
            this.getMovieCast(this.selectedCard.media_type, this.selectedCard.id);
            this.convertGenreIds(this.selectedCard.genre_ids);
      }
    },

    methods: {
    openOverlay(card) {
      this.selectedCard = card;
      this.showOverlay = true;
    },

    closeOverlay() {
      this.selectedCard = null;
      this.showOverlay = false;
    },

    getMovieImage() {
        return this.selectedCard.backdrop_path ? 'https://image.tmdb.org/t/p/w1280' + this.selectedCard.backdrop_path : 'Immagine non disponibile';
    },

    convertGenreIds(ids) {
          ids.forEach((id) => {
            store.genreList.forEach((genre) => {

              if(id == genre.id) {
                this.genres += genre.name + ' ';
              }
            })
        })
    },

    getMovieCast(media_type, id) {
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=5068815fa116495c9abeb543996c2c61`).then(res => {
            
        res.data.cast.slice(0, 5).forEach(element => {
            this.castList += element.name + ' ' ;
           });
        })

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
          @card-clicked="openOverlay(currentCard)"
        ></CardItem>
      </div>
  
      <h2 v-if="store.tv.length != 0" class="text-white mt-5">TV SERIES</h2>
      <div class="d-flex flex-wrap">
        <CardItem
          v-for="currentCard in store.tv"
          :key="currentCard.id"
          :card="currentCard"
          @card-clicked="openOverlay(currentCard)"
        ></CardItem>
      </div>
  

      <div class="overlay" v-if="showOverlay ">
        <div class="overlay-content">
            <img :src="getMovieImage()" class="background-image">
            <div class="overlay-close" @click="closeOverlay">X</div>
          
            <h2>{{ selectedCard.title || selectedCard.name }}</h2>
            <div>{{ genres || 'Genere non disponibile' }}</div>
            <div>{{ castList || 'Cast non disponibile' }}</div>
            <p>{{ selectedCard.overview }}</p>
            
            <div class="image-container">
                <img class="image" v-if="selectedCard.original_language in countryFlags" :src="countryFlags[selectedCard.original_language]" alt="">
                <div v-else>{{ selectedCard.original_language }}</div>
            </div>
        </div>
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

    .overlay {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.653);
        color: white;
        z-index: 9999; 
        justify-content: center;
        align-items: center;
    }

    .overlay-content {
        position: relative;
        width: 1000px;
        height: auto;

        background-color: rgb(28, 65, 65);
        padding: 20px;
        border-radius: 10px;
    }

    .background-image {
        width: 100%;
        background-size: cover;
    }

    .overlay-close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .image-container {
     width: 30px;
    height: 40px;

        .image {
         width: 100%;
        }
    }
</style>
