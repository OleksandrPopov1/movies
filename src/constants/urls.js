const baseURL = 'https://api.themoviedb.org/3';

const keyAPI = 'api_key=de1bce35da57bc2fa297c0248645d279&';

const urls = {
    moviesPage : `/discover/movie?${keyAPI}page=`,
    moviesGenre : `/genre/movie/list?${keyAPI}`,
    searchMoviesByName : `/search/keyword?${keyAPI}query=`,
    poster: 'https://image.tmdb.org/t/p/w500/'
}

export {
    baseURL,
    urls
}