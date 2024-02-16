"use client";
import { useState } from "react";
import useAuthContext from "./useAuthContext";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetRole = () => {

    const { user, loading } = useAuthContext();
    const axiosPublic = useAxiosPublic();
    const [role, setRole] = useState(null);

    const {data} = useQuery({
        enabled: !loading,
        queryKey: ['user'],
        queryFn: async() => {
            const res = await axiosPublic.get(`https://synchome-server-pink.vercel.app/api/v1/users/${user?.email}`)
            setRole(res?.data?.role);
        }
    })

    return role;
};

export default useGetRole;