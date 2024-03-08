<script>
import axios from 'axios';
import {store} from './store.js'

import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';
import AppMain from './components/AppMain.vue';

export default {

  data() {
    return {
      store
    }
  },

  components: {
    AppHeader,
    AppHome,
    AppMain
  },


  created() {
    
    axios.get('https://api.themoviedb.org/3/genre/tv/list?&api_key=5068815fa116495c9abeb543996c2c61')
        .then(res => {

            for (let i = 0; i < res.data.genres.length; i++) {
                store.genreList.push(res.data.genres[i]);
            }
        });

    axios.get('https://api.themoviedb.org/3/genre/movie/list?&api_key=5068815fa116495c9abeb543996c2c61')
        .then(res => {

            for (let i = 0; i < res.data.genres.length; i++) {
                const genre = res.data.genres[i];

                if (!store.genreList.some(existingGenre => existingGenre.id === genre.id)) {
                    store.genreList.push(genre);
                }
            }
        });

        this.store.movieGenreFilter = "0";
        this.store.tvGenreFilter = "0";
  },


  methods: {
    
    movieFilter() {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=5068815fa116495c9abeb543996c2c61&query=` + this.store.searchText).then(res => {
        this.store.movies = res.data.results.filter((el )=> {
          return el.media_type == 'movie'; 
        });
        this.store.tv = res.data.results.filter((el )=> {
          return el.media_type == 'tv'; 
        });
      }).catch(err => {
        console.log(err)
      });
    }
  },

}

</script>

<template>

<AppHeader @filter="movieFilter()"></AppHeader>
<AppHome></AppHome>
<AppMain></AppMain>

</template>

<style lang="scss">

</style>
