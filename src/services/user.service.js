import {axiosInstance} from "./axios.service";

const getUsers = () => {
    return axiosInstance.get('');
}

const getPosts = (id) => {
    return axiosInstance.get('/' + id + '/posts');
}

export {getPosts,getUsers}