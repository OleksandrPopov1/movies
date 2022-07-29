const baseURL = 'https://api.themoviedb.org/3';

const posterURL = 'https://image.tmdb.org/t/p/w500';

const keyAPI = 'api_key=de1bce35da57bc2fa297c0248645d279&';

const urls = {
    movies : `/discover/movie?${keyAPI}page=`,
    movieById: `/movie`,
    genres : `/genre/movie/list?${keyAPI}`,
    searchMoviesByName : `/search/keyword?${keyAPI}query=`
}

export {
    keyAPI,
    baseURL,
    posterURL,
    urls
}