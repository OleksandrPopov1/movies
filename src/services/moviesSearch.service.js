import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesSearchService = {
    searchByName: (name, page=1) => axiosServices.get(urls.searchMoviesByName + name + '&page=' + page, {params: {page}})
}