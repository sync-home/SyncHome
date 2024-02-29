"use client";
import useAuthContext from "./useAuthContext";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetRole = () => {

    const { user } = useAuthContext();
    const axiosPublic = useAxiosPublic();

    const { data: role = 'guest', isLoading, isPending } = useQuery({
        enabled: !!user?.email,
        queryKey: [ 'user-role', `${user?.email}` ],
        refetchOnWindowFocus: false,
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-role/${user?.email}`)

            return res?.data?.role;
        }
    })

    return { role, isLoading, isPending };
};

export default useGetRole;