import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

export const apiService = {
    getTodos: () => axiosInstance.get(urls.todos),
    getAlbums: () => axiosInstance.get(urls.albums),
    getPost: (id) => axiosInstance.get(urls.posts + '/' + id),
    getComments: () => axiosInstance.get(urls.comments),
}