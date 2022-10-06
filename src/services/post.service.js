import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postService = {
    getPosts: () => axiosService.get(urls.posts),
    getPost: (id) => axiosService.get(urls.posts + '/' + id)
}