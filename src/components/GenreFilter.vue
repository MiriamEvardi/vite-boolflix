<script>
import {store} from '../store.js'

export default {

    name: 'GenreFilter',

    data() {
        return {
        store,
    }
  },
  
}

</script>

<template>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Generi
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>

</template>

<style lang="scss">
    
</style>