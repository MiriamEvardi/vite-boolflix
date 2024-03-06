<script>


export default {
    name: 'CardItem',

    props: {
        movie: Object
    }
}

</script>

<template>
    <li class="card">
        <img :src="movie.backdrop_path" class="image">
        <h2> {{ movie.title }} </h2>
        <h3> {{ movie.original_title }} </h3>
        <div> language: {{ movie.original_language }} </div>
        <div> vote: {{ movie.vote_average }} </div>
    </li>

</template>

<style lang="scss">

    .card {
        display: flex;
        flex-direction: column;

        width: calc((100% / 5) - ((20px * 4) / 5));

        border: black 2px solid;

        .image {
            width: 100%;
        }
    }

</style>
