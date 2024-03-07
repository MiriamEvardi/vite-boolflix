<script>
import axios from 'axios';
import {store} from '../store.js'

export default {

    name: 'GenreFilter',

    data() {
        return {
        store,
    }
  },


  created() {
    axios.get('https://api.themoviedb.org/3/genre/tv/list?&api_key=5068815fa116495c9abeb543996c2c61')
    .then(res => {

        store.tvGenres = res.data.genres;
    });

    axios.get('https://api.themoviedb.org/3/genre/movie/list?&api_key=5068815fa116495c9abeb543996c2c61')
    .then(res => {

        store.movieGenres = res.data.genres;
    });
  }
  
}

</script>

<template>

<!-- Movies dropdown -->
<div class="dropdown">
  <button class="btn text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Movies
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li v-for="(currentGenre, index) in store.movieGenres" :key="index"><a class="dropdown-item" href="#">{{ currentGenre.name }}</a></li>
  </ul>
</div>

<!-- Tv shows dropdown -->
<div class="dropdown">
  <button class="btn text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Tv Shows
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li v-for="(currentGenre, index) in store.tvGenres" :key="index"><a class="dropdown-item" href="#">{{ currentGenre.name }}</a></li>
  </ul>
</div>

</template>

<style lang="scss">
    
</style>