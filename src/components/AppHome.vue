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
            this.populars = res.data.results;
            console.log(res)
        }) 
    },


}

</script>

<template>
    <div class="home-top"> 
        <img src="/public/img/Netflix-Background.jpg" alt="" class="home-background">
    </div>

    <h2>Most popular movies</h2>

    <div class="slider-wrapper overflow-hidden" tabindex="0">

                <div class="thumbs d-flex">
                    <div @click="(slidePreviousImage())" class="prev"></div>
                    <div @click="(slideNextImage())" class=" next"></div>

                    <div class="thumb " v-for="(currentMovie, index) in populars" @click="(slideThumbs(index))"
                        :class=" index == store.activeIndex ? 'active' : ''">
                        <img :src="store.getMovieImage(currentMovie)" alt="">

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

.thumbs {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
}

.thumb {
    flex: 0 0 calc(100% / 8); 
    scroll-snap-align: start;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.thumb.active {
    opacity: 1;
}

.thumb img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

</style>
