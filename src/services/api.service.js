import {axiosInstance} from "./axios.service";

export const getShips = () => {
    return axiosInstance.get('');
}