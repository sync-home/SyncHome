import axios from "axios";

const axiosSecureInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1"
    // baseURL: "https://synchome-server.vercel.app/api/v1"
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
