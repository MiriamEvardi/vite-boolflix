<script>


export default {
    name: 'movieItem',

    props: {
        movie: Object
    },

    data() {
        return {
            countryFlags: {
                'en': '/img/en-flag.jpg',
                'it': '/img/it-flag.jpg',
                'ko': '/img/kr-flag.jpg',
                'ja': '/img/jp-flag.jpg',
                'cn': '/img/cn-flag.jpg'
            }
        };
    }
}

</script>

<template>
    <div class="card">
        <img :src="movie.backdrop_path" class="image">
        <h2> {{ movie.title }} </h2>
        <h3> {{ movie.original_title }} </h3>
        <div class="image-container">
            <img v-if="movie.original_language in countryFlags" :src="countryFlags[movie.original_language]" class="image">
            <div v-else> {{ movie.original_language }} </div>
        </div>
        <div> vote: {{ movie.vote_average }} </div>
    </div>

</template>

<style lang="scss">

    .card {
        display: flex;

        width: calc((100% / 5) - ((20px * 4) / 5));

        border: black 2px solid;

    }

    .image-container {
        width: 30px;
        height: 30px;
    }
    
    .image {
        width: 100%;
    }

</style>
