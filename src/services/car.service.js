import {axiosInstance} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getCars: () => axiosInstance.get(urls.cars),
    getCarById: (id) => axiosInstance.get(urls.cars + '/' + id),
    createCar: (car) => axiosInstance.post(urls.cars, car),
    updateCar: (id, car) => axiosInstance.put(urls.cars + '/' + id, car),
    deleteCar: (id) => axiosInstance.delete(urls.cars + '/' + id)
}

export {carService};