import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesPageService = {
    getAll : (page=1) => axiosServices.get(urls.moviesPage + page)
};