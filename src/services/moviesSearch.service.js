import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesSearchService = {
    searchByName: (query, page=1) => axiosServices.get(urls.searchMoviesByName, {params: {
            page,
            language: 'en-US',
            query
    }})
}