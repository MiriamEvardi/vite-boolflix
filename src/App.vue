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
<AppMain></AppMain>

</template>

<style lang="scss">

</style>
