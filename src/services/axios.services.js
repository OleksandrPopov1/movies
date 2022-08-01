import axios from "axios";

import {baseURL} from "../constants";

const axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTFiY2UzNWRhNTdiYzJmYTI5N2MwMjQ4NjQ1ZDI3OSIsInN1YiI6IjYyZTJjNzZlYWU2ZjA5MDA2ZDZmM2Q5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u2BmZLzTdSa0_cwBQhL96XubLqKVbtbJM-LnJBC7LPs';

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

export {
    axiosServices
};