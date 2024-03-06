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
        <div> {{ movie.title }} </div>
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
