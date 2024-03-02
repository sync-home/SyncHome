import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:5000/api/v1"
    // baseURL: "https://synchome-server.vercel.app/api/v1"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
