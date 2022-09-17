import axios from "axios";

import {baseURL} from "../urls/urls";

export const axiosInstance = axios.create({baseURL});