import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    movies: [],
    tv: [],
    searchText: '',
    genreList: [],
    selectedCard: null,
    genres: '',
    castList: '',
    tvGenres: [],
    movieGenres: [],
    movieGenreFilter: '',
    tvGenreFilter: '',
    activeIndex: 0,



    convertGenreIds(ids) {
        ids.forEach((id) => {
            store.genreList.forEach((genre) => {

                if (id == genre.id) {
                    this.genres += genre.name + ' ';

                }
            })

        })
    },

    getMovieCast(media_type, id) {
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=5068815fa116495c9abeb543996c2c61`).then(res => {

            res.data.cast.slice(0, 5).forEach(element => {
                this.castList += element.name + ' ';
            });
        })

    },

    getMovieImage(movie) {
        return movie.poster_path ? 'https://image.tmdb.org/t/p/w342' + movie.poster_path : '/img/Background.jpg';
    },

    slideThumbs(index) {
        this.activeIndex = index;
    },
})