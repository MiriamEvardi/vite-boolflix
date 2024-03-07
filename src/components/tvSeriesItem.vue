<script>


export default {
    name: 'tvSeriesItem',

    props: {
        tvSeries: Object
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
        <img class="image">
        <h2> {{ tvSeries.name }} </h2>
        <h3> {{ tvSeries.original_name }} </h3>
        <div class="image-container">
            <img v-if="tvSeries.original_language in countryFlags" :src="countryFlags[tvSeries.original_language]" class="image">
            <div v-else> {{ tvSeries.original_language }} </div>
        </div>
        <div> vote: {{ tvSeries.vote_average }} </div>
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
