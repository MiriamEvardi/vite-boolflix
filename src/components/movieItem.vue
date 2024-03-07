<script>

export default {
    name: 'movieItem',

    props: {
        movie: Object
    },


    data() {
        return {

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

    methods: {

        getMovieImage() {
        return this.movie.poster_path ? 'https://image.tmdb.org/t/p/w342' + this.movie.poster_path : '';
        },

        getStars() {
            const vote = Math.round(this.movie.vote_average / 2);

            for(let i = 0; i < vote; i++) {

              this.stars.splice(i, 1, 'fa-solid fa-star'); 
            }

            return this.stars;
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
        <h2> {{ movie.title }} </h2>
        <h3> {{ movie.original_title }} </h3>
        <div class="image-container">
            <img v-if="movie.original_language in countryFlags" :src="countryFlags[movie.original_language]" class="image">
            <div v-else> {{ movie.original_language }} </div>
        </div>
        <div class="d-flex">
            <i v-for="currentVote in getStars()" :class="currentVote"></i>
            <span>{{ (movie.vote_average / 2).toFixed(1) }}</span>
        </div>
    </div>
  </div>
</div>

</template>

<style lang="scss">
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 400px;
  border: 1px solid #f1f1f1;   
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

</style>
