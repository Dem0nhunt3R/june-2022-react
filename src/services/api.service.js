import {axiosService} from "./axios.service";

export const apiService = {
    getAll: (endpoint) => axiosService.get(endpoint),
    getById: (endpoint, id) => axiosService.get(`${endpoint}/${id}`)
}