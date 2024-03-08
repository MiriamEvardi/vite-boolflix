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

<select v-model="store.movieGenreFilter" class=" bg-black border-0 text-white nav-select w-0 text-center">
  <option value="0" selected>Movies</option>
  <option v-for="(currentGenre, index) in store.movieGenres" :key="index" :value="currentGenre.id">{{ currentGenre.name }}</option>
</select>

<!-- Tv shows dropdown -->

<select v-model="store.tvGenreFilter" class=" bg-black border-0 text-white nav-select w-0 text-center">
  <option value="0" selected>Tv Shows</option>
  <option v-for="(currentGenre, index) in store.tvGenres" :key="index" :value="currentGenre.id">{{ currentGenre.name }}</option>
</select>

</template>

<style lang="scss">

select.nav-select {
  appearance: none;
}
    
</style>