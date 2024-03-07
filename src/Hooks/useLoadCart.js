import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "./useAuthContext";

const useLoadCart = () => {
    const { user, loading } = useAuthContext()
    const axiosSecure = useAxiosSecure()

    const { data: cart = [], isLoading: isLoadingCart, isPending: isPendingCart, refetch: refetchCart } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: [ 'cart', `${user?.email}` ],
        queryFn: async () => {
            console.log('User in cart: ', user?.email);
            try {
                const res = axiosSecure.get('/cart', { email: user?.email })

                console.log('fetched cart: ', res?.data);

                return res?.data
            } catch (error) {
                console.error(error?.message);
                return []
            }
        }
    })

    return { cart, isLoadingCart, isPendingCart, refetchCart }
}

export default useLoadCart