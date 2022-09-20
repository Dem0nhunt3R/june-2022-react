import {axiosInstance} from "./axios.service";

const getLaunches = (limit,offset) => {
    return axiosInstance.get('',{
        params:{
            limit,
            offset
        }
    })
}

export {getLaunches};