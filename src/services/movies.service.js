import {axiosServices} from "./axios.services";
import {keyAPI, urls} from "../constants";

export const moviesService = {
    getAll: (page = 1) => axiosServices.get(urls.movies + page, {params: {page}}),
    getOneById: (id) => axiosServices.get(urls.movieById + '/' + id + '?' + keyAPI.slice(0, -1))
};