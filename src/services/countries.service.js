import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const countryService = {
    getAll : () => axiosService.get(urls.countries)
};
