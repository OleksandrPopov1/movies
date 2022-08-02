import {axiosServices} from "./axios.services";
import { urls} from "../constants";

export const moviesService = {
    getAll: (page = 1, with_genres) => axiosServices.get(urls.movies, {params: {
            page,
            language: 'en-US',
            with_genres
    }}),
    getOneById: (id) => axiosServices.get(urls.movieById + '/' + id)
};