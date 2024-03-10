import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "./useAuthContext";
import { getFilteredProducts } from "@/components/utils/getFilteredProducts";

const useLoadCart = (AllProducts, isLoading) => {
    const { user } = useAuthContext()
    const axiosSecure = useAxiosSecure()
    // console.log('useLoadCart: ', AllProducts, isLoading)
    const { data: cart = [], isLoading: isLoadingCart, isPending: isPendingCart, refetch: refetchCart } = useQuery({
        enabled: !!user?.email && !isLoading,
        queryKey: [ 'cart', `${user?.email}` ],
        queryFn: async () => {
            try {
                const res = axiosSecure.get('/cart', { email: user?.email })
                const cartInfo = res?.data;

                // console.log('useLoadCart: /cart', cart);
                if (Array.isArray(cartInfo)) {
                    const cart = AllProducts?.filter(product => getFilteredProducts(cartInfo, product, true))

                    return cart
                }

                return []
            } catch (error) {
                // console.error(error?.message);
                return []
            }
        }
    })

    return { cart, isLoadingCart, isPendingCart, refetchCart }
}

export default useLoadCart