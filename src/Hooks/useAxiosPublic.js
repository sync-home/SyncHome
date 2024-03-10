import { baseURL } from "@/components/utils/getBaseURL";
import axios from "axios";

const axiosPublic = axios.create({
    baseURL
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
