<script>
import axios from 'axios';
import {store} from '../store.js'

export default {
    name: 'CardItem',

    props: {
        card: Object,
    },


    data() {
        return {
           
            store,

            stars: [
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star'
            ]


        };
    },


    methods: {

        

        getMovieImage() {
        return this.card.poster_path ? 'https://image.tmdb.org/t/p/w342' + this.card.poster_path : '';
        },

        getStars() {
            const vote = Math.round(this.card.vote_average / 2);

            for(let i = 0; i < vote; i++) {

              this.stars.splice(i, 1, 'fa-solid fa-star'); 
            }

            return this.stars;
        },

    }
}

</script>

<template>

  <div class="flip-card" @click="$emit('card-clicked')">
    <div class="card-inner">
      <div class="flip-card-front">
        <img :src="getMovieImage()" class="image">
      </div>

      <div class="flip-card-back">
        <h2>{{ card.title ? card.title : card.name }}</h2>
        <h3>{{ card.original_title ? card.original_title : card.original_name }}</h3>



        

        <div class="d-flex">
          <i v-for="currentVote in getStars()" :class="currentVote"></i>
          <span>{{ (card.vote_average / 2).toFixed(1) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.flip-card {
  width: 200px;
  height: 300px;
  border: 1px solid #000000;   
}

.card-inner {
  width: 100%;
  height: 100%;
  text-align: center;

  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black; 
    
  img {
        width: 100%;
        height: 100%;
    }
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
