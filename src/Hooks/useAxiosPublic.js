import axios from "axios";

const axiosPublic = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:5000/api/v1" : "https://synchome-server.vercel.app/api/v1"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
