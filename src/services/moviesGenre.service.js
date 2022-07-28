import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const moviesGenreService = {
    getAll : () => axiosServices.get(urls.moviesGenre)
};
