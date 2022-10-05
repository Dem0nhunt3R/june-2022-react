import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postService = {
    getPosts:()=>axiosService.get(urls.posts)
}