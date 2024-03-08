<script>
import axios from 'axios';
import {store} from '../store.js'

export default {
    name: 'CardItem',

    props: {
        card: Object
    },


    data() {
        return {
           
            store,
            castList : '',
            genres : '',

            countryFlags: {
                'en': '/img/en-flag.jpg',
                'it': '/img/it-flag.jpg',
                'ko': '/img/kr-flag.jpg',
                'ja': '/img/jp-flag.jpg',
                'cn': '/img/cn-flag.jpg'
            },

            stars: [
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star',
              'fa-regular fa-star'
            ]


        };
    },

    created() {
        this.getMovieCast(this.card.media_type, this.card.id);

        this.convertGenreIds(this.card.genre_ids);
    },

    methods: {

        getMovieCast(media_type, id) {
          axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=5068815fa116495c9abeb543996c2c61`).then(res => {
            
            res.data.cast.slice(0, 5).forEach(element => {
              this.castList += element.name + ' ' ;
            });
          })

        },

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

        convertGenreIds(ids) {
          ids.forEach((id) => {
            store.genreList.forEach((genre) => {

              if(id == genre.id) {
                this.genres += genre.name + ' ';
              }
            })
          })
        }
    }
}

</script>

<template>

<div class="flip-card">
  <div class="flip-card-inner">
    
    <div class="flip-card-front">
        <img :src="getMovieImage()" class="image">
    </div>

    <div class="flip-card-back">
        <h2> {{ card.title ? card.title : card.name }} </h2>
        <h3> {{ card.original_title ? card.original_title : card.original_name }} </h3>

        <div class="image-container">
            <img v-if="card.original_language in countryFlags" :src="countryFlags[card.original_language]" class="image">
            <div v-else> {{ card.original_language }} </div>
        </div>

        <div>{{ genres || 'cast non disponibile' }}</div>
        <div>{{ castList || 'cast non disponibile' }}</div>

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
  background-color: transparent;
  width: 200px;
  height: 300px;
  border: 1px solid #000000;   
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
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

.image-container {
  width: 30px;
  height: 40px;

  .image {
    width: 100%;
  }
}

</style>
