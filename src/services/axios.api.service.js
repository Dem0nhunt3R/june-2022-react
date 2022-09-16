import axios from "axios";
import {usersUrl} from "../urls/urls";

export const axiosInstance = axios.create({baseURL: usersUrl});