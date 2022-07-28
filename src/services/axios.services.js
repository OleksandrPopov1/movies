import axios from "axios";

import {baseURL} from "../constants";

const axiosServices = axios.create({baseURL});

export {
    axiosServices
};