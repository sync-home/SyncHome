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

            /* useQuery can't return undefined and will throw: `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["user-role","hoqe1997@gmail.com"]` */
            return res?.data?.role || 'guest';
        }
    })

    return { role, isLoading, isPending };
};

export default useGetRole;