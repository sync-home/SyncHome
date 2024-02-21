import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://synchome-server.vercel.app/api/v1"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

// https://synchome-server-pink.vercel.app