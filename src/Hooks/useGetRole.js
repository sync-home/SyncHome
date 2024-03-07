"use client";
import useAuthContext from "./useAuthContext";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetRole = () => {

    const { user, loading } = useAuthContext();
    const axiosPublic = useAxiosPublic();

    const {data: userData={}, isLoading, isPending} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['user', `${user?.email}`],
        queryFn: async() => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res?.data;
        }
    })

    return {role: userData?.role, isLoading, isPending};
};

export default useGetRole;