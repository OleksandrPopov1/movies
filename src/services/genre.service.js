import {axiosServices} from "./axios.services";
import {urls} from "../constants";

export const genreService = {
    getAll : () => axiosServices.get(urls.genres)
};
