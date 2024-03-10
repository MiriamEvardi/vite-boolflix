
<script>
    import {store} from '../store.js'

    export default {
        name: 'AppOverlay',

        data() {
            return {
                store,

               stars: [
                'fa-regular fa-star',
                'fa-regular fa-star',
                'fa-regular fa-star',
                'fa-regular fa-star',
                'fa-regular fa-star'
                ],

                countryFlags: {
                'en': '/img/en-flag.jpg',
                'it': '/img/it-flag.jpg',
                'ko': '/img/kr-flag.jpg',
                'ja': '/img/jp-flag.jpg',
                'cn': '/img/cn-flag.jpg'
                },
            }
        },

        created() {
            this.store.getMovieCast(this.store.selectedCard.media_type, this.store.selectedCard.id);
            this.store.convertGenreIds(this.store.selectedCard.genre_ids);
        },

        methods: {

            getStars() {
                const vote = Math.round(this.store.selectedCard.vote_average / 2);

                for(let i = 0; i < vote; i++) {

                this.stars.splice(i, 1, 'fa-solid fa-star'); 
            }

                return this.stars;
            },

            getMoviePoster() {
                return this.store.selectedCard.backdrop_path ? 'https://image.tmdb.org/t/p/w1280' + this.store.selectedCard.backdrop_path : '/public/img/Background.jpg';
            },

        }
    }
</script>

<template>
       
      <div class="overlay">
        <div class="overlay-content">
            <div>
                <img :src="getMoviePoster()" class="background-image">
            </div>
            <div class="overlay-close fs-3" @click="$emit('close')">X</div>
          
            <h2>{{ store.selectedCard.title || store.selectedCard.name }}</h2>
            <div>{{ store.genres || 'Genere non disponibile' }}</div>
            <div>{{ store.castList || 'Cast non disponibile' }}</div>
            <div class="d-flex">
                <i v-for="currentVote in getStars()" :class="currentVote"></i>
                <span>{{ (store.selectedCard.vote_average / 2).toFixed(1) }}</span>
            </div>
            <p>{{ store.selectedCard.overview }}</p>

            <div class="image-container">
                <img class="image" v-if="store.selectedCard.original_language in countryFlags" :src="countryFlags[store.selectedCard.original_language]" alt="">
                <div v-else>{{ store.selectedCard.original_language }}</div>
            </div>
        </div>
      </div>
      
</template>

<style lang="scss" scoped>

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
        height: 800px;

        background-color: rgb(16, 17, 17);
        padding: 20px;
        border-radius: 10px;
        overflow-y: scroll;

    }
    .overlay-content::-webkit-scrollbar {
            width: 10px;
    }

    .overlay-content::-webkit-scrollbar-track {
            background: rgb(0, 0, 0);
    }

    .overlay-content::-webkit-scrollbar-thumb {
            background-color: rgb(43, 43, 43);
            border-radius: 20px;
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