import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesService = {
    getAll : (page=1) => axiosServices.get(urls.movies + page, {params: {page}})
};