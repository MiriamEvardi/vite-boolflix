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


  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=5068815fa116495c9abeb543996c2c61&query=ritorno+al+futuro').then(res => {
      this.store.movies = res.data.results;
      console.log(res)
    })
  },

}

</script>

<template>

<AppHeader></AppHeader>
<AppMain></AppMain>

</template>

<style lang="scss">

</style>
