import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getUsers: () => axiosService.get(urls.users),
    getUser: (id) => axiosService.get(urls.users + '/' + id)
}