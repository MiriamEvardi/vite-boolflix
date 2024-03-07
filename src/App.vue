<script>
import axios from 'axios';
import {store} from './store.js'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {

  data() {
    return {
      store
    }
  },

  components: {
    AppHeader,
    AppMain
  },


  

  methods: {
    
    movieFilter() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=5068815fa116495c9abeb543996c2c61&query=' + this.store.searchText).then(res => {
        this.store.movies = res.data.results;
        console.log(res)
        
      }).catch(err => {
        console.log(err)
      });

      axios.get('https://api.themoviedb.org/3/search/tv?api_key=5068815fa116495c9abeb543996c2c61&query=' + this.store.searchText).then(res => {
        this.store.tvSeries = res.data.results;
        console.log(res)
        
      }).catch(err => {
        console.log(err)
      });


    }
  },

}

</script>

<template>

<AppHeader @filter="movieFilter()"></AppHeader>
<AppMain></AppMain>

</template>

<style lang="scss">

</style>
