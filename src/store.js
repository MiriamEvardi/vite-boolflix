import { reactive } from 'vue';

export const store = reactive({
    movies: [],
    tv: [],
    searchText: '',
    genreList: [],
    activeIndex: 0,
})