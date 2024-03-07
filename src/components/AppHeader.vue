<script>
import {store} from '../store.js';
import GenreFilter from './GenreFilter.vue';

export default {

    name: 'AppHeader',

    data() {
        return {
        store,
    }
  },

  components: {
    GenreFilter,
  }
  
}

</script>

<template>
    

    <nav class="navbar justify-content-between">
        <img class="navbar-brand px-5" src="/img/fontbolt.png"> 
            <div class="form-inline px-5">
                <div class="input-group">
                    <GenreFilter></GenreFilter>
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark rounded-0 border-0 border-end-0 rounded-start-4" id="basic-addon1"><i class="fa-solid fa-magnifying-glass fs-4"></i></span>
                    </div>
                    <input @keyup.enter="$emit('filter')" type="text" class="form-control border-0 bg-dark border-start-0 rounded-end-4 text-white" placeholder="Search..." aria-label="text" v-model="store.searchText">
                    <div class="profile rounded-5 ms-4 text-center py-1">
                        m
                    </div>
                </div>
            </div>
    </nav>

</template>

<style lang="scss">
    nav {
        background-color: black;
        color: white;
    }

    .profile {
        width: 38px;
        height: 38px;
        background-color: pink;
    }

    .fa-magnifying-glass {
        height: 26px;
        color: rgb(255, 255, 255);
    }
</style>
