import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    searchText: '',

    flags: [
        '/img/en-flag.jpg',
        '/img/it-flag.jpg',
        '/img/kr-flag.jpg',
        '/img/jp-flag.jpg',
        '/img/us-flag.jpg'
    ]
})