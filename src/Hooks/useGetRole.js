"use client";
import fetchPublic from "@/components/utils/getFetchedData";
import useAuthContext from "./useAuthContext";
import { useQuery } from "@tanstack/react-query";

const useGetRole = () => {

    const { user } = useAuthContext();

    const { data: role = 'guest', isLoading, isPending } = useQuery({
        enabled: !!user?.email,
        queryKey: [ 'user-role', `${user?.email}` ],
        refetchOnWindowFocus: false,
        queryFn: async () => {
            const res = await fetchPublic(`/user-role/${user?.email}`, {
                cache: 'force-cache',
                method: "GET"
            });
clg
            /* useQuery can't return undefined and will throw: `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ["user-role","hoqe1997@gmail.com"]` */
            return res?.data?.role || 'guest';
        }
    })

    return { role, isLoading, isPending };
};

export default useGetRole;