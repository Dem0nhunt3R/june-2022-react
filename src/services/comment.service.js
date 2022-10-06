import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const commentService = {
    getComments: () => axiosService.get(urls.comments),
    getComment: (id) => axiosService.get(urls.comments + '/' + id)
}