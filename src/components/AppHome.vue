<script>
import axios from 'axios';
import {store} from '../store.js'

import AppOverlay from './AppOverlay.vue'


export default {
    name: 'AppHome',
    

    data() {
        return {
            populars: [],
            store,
            showOverlay: false,
        }
    },

    components: {
       AppOverlay,
    },

    created() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5068815fa116495c9abeb543996c2c61').then(res => {
            this.populars = res.data.results;
            console.log(res)
        }) 
    },

    methods: {
        slideNextImage() {
            this.store.activeIndex++

            if (this.store.activeIndex >= this.populars.length) {
                this.store.activeIndex = 0;
            }

            this.scrollToRight()
        },

        slidePreviousImage() {
            this.store.activeIndex--

            if (this.store.activeIndex < 0) {
                this.store.activeIndex = this.populars.length - 1;
            }

            this.scrollToRight()
        },

        slideThumbs(index) {
            this.store.activeIndex = index;
        },

        scrollToRight() {
            const target = this.$refs.myScrollTarget;
            const thumbWidth = target.clientWidth / this.populars.length;
            const scrollPosition = thumbWidth * this.store.activeIndex;
    
            this.$nextTick(() => {
                target.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
            });
         });
        },

        openOverlay(card) {
            this.store.selectedCard = card;
            this.showOverlay = true;
        },

        closeOverlay() {
            this.store.selectedCard = null;
            this.showOverlay = false;

            this.store.castList = '';
            this.store.genres = '';
        },
        

    }

}

</script>

<template>
    <div class="home-top"> 
        <img src="/public/img/Background.jpg" alt="" class="home-background">
        <img src="/public/img/Home.png" alt="" class="home-title">
    </div>

    <h2 class="text-white my-3">Most popular movies</h2>

    <div class="slider-wrapper overflow-hidden py-3" tabindex="0">

                <div class="thumbs d-flex" ref="myScrollTarget">
                    <div class="arrows-wrapper">
                        <div @click="(slidePreviousImage())" class="prev"><i class="fa-solid fa-arrow-left"></i></div>
                        <div @click="(slideNextImage())" class=" next"> <i class="fa-solid fa-arrow-right"></i> </div>
                    </div>
                    <div class="thumb " v-for="(currentMovie, index) in populars" @click="(slideThumbs(index))" 
                            :class="{ 'active': index === store.activeIndex }">
                        <img :src="store.getMovieImage(currentMovie)" @click="openOverlay(currentMovie)" alt="">

                    </div>
                </div>
    </div>

    <AppOverlay v-if="showOverlay" @close="closeOverlay()" >
      </AppOverlay>
</template>

<style lang="scss" >

.home-top {
    height: 600px;
    width: 100%;

    .home-background {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    .home-title {
        position: absolute;
        left: 19%;
        top: 30%;
    }
}

.slider-wrapper {
    position: relative;
}

.thumbs {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    overflow: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent; 
}

.thumbs::-webkit-scrollbar {
    width: 6px; 
}

.thumbs::-webkit-scrollbar-track {
    background-color: transparent;
}

.thumbs::-webkit-scrollbar-thumb {
    background-color: transparent;
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
.arrows-wrapper {
    position: absolute;
    top: 50%;
    
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.prev,
.next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;
}


</style>
