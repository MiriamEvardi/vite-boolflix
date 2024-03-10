<script>
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
}

</script>

<template>

<div class="flip-card">
  <div class="flip-card-inner">
    
    <div class="flip-card-front">
        <img :src="store.getMovieImage(card)" class="image">
    </div>

    <div class="flip-card-back">
        <h2> {{ card.title ? card.title : card.name }} </h2>
        <h5> {{ card.original_title ? card.original_title : card.original_name }} </h5>
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
  background-color: rgb(25, 25, 25);
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
