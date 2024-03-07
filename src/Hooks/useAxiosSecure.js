import { baseURL } from "@/components/utils/getBaseURL";
import axios from "axios";

const axiosSecureInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

axiosSecureInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config here
        console.log('Request interceptor:', config);
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

const useAxiosSecure = () => {
    return axiosSecureInstance;
};

export default useAxiosSecure;
