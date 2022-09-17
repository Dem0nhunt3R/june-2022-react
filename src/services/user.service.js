import {axiosInstance} from "./axios.api.service";

const getUsers = () => {
    return axiosInstance.get('');
}

const getUserById = (id) => {
    return axiosInstance.get('/' + id);
}

export {getUserById, getUsers}