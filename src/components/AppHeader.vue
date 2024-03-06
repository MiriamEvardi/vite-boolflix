<script>
import {store} from '../store.js'

export default {

    name: 'AppHeader',

    data() {
        return {
        store,
    }
  },
  
}

</script>

<template>
    <nav class="navbar justify-content-between">
        <a class="navbar-brand px-5">Navbar</a>
            <div class="form-inline px-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text rounded-0 border-end-0" id="basic-addon1">@</span>
                    </div>
                    <input @keyup.enter="$emit('filter')" type="text" class="form-control border-start-0 rounded-0" placeholder="Search..." aria-label="text" v-model="store.searchText">
                </div>
            </div>
    </nav>

</template>

<style lang="scss">
    nav {
        background-color: black;
        color: white;
    }
</style>
