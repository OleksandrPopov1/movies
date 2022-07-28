import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesSearchService = {
    searchByName: (name) => axiosServices.get(urls.searchMoviesByName + name)
}