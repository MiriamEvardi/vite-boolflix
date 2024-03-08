<script>
import axios from 'axios';
import {store} from '../store.js'


export default {
    name: 'AppHome',

    
   

    data() {
        return {
            populars: [],
            store,
        }
    },

    created() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5068815fa116495c9abeb543996c2c61').then(res => {
            this.popular = res.data.results;
            console.log(res)
        }) 
    },

    methods: {
        getMovieImage() {
        return this.card.poster_path ? 'https://image.tmdb.org/t/p/w342' + this.card.poster_path : '';
        },
    }
}

</script>

<template>
    <div class="home-top"> 

        <img src="/public/img/Netflix-Background.jpg" alt="" class="home-background">



    </div>

    <div class="slider-wrapper rounded-5 overflow-hidden" tabindex="0">




                <div class="thumbs d-flex">
                    <div @click="(slidePreviousImage())" class="prev"></div>
                    <div @click="(slideNextImage())" class=" next"></div>

                    <div class="thumb " v-for="(currentMovie, index) in populars" @click="(slideThumbs(index))"
                        :class=" index == activeIndex ? 'active' : ''">
                        <img :src=" getMovieImage()" alt="">

                    </div>
                </div>
    </div>
</template>

<style lang="scss" >

.home-top {
    height: 600px;
    width: 100%;

    .home-background {
        width: 100%;
        height: 100%;
        background-size: cover;
    }
}

</style>
