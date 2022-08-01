const baseURL = 'https://api.themoviedb.org/3';

const posterURL = 'https://image.tmdb.org/t/p/w500';
const backgroundURL = 'https://image.tmdb.org/t/p/original';
const noImageURL = 'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';

const keyAPI = 'api_key=de1bce35da57bc2fa297c0248645d279&';

const urls = {
    movies : `/discover/movie?page=`,
    movieById: `/movie`,
    genres : `/genre/movie/list?`,
    searchMoviesByName : `/search/movie?query=`
}

export {
    keyAPI,
    baseURL,
    posterURL,
    urls,
    noImageURL,
    backgroundURL
}