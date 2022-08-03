import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const moviesService = {
    getAll: (page = 1, with_genres, region) => axiosService.get(urls.movies, {
        params: {
            page,
            language: 'en-US',
            with_genres,
            region
        }
    }),
    searchByName: (query, page = 1) => axiosService.get(urls.searchMoviesByName, {
        params: {
            page,
            query,
            language: 'en-US'
        }
    }),
    getOneById: (id) => axiosService.get(urls.movieById + '/' + id),
    getRecommendationsFilms: (id) => axiosService.get(urls.movieById + `/${id}/recommendations`)
};