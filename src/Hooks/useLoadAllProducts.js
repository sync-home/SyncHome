import { useQuery } from "@tanstack/react-query";
import fetchPublic from "../components/utils/getFetchedData";

const useLoadAllProducts = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [ 'products' ],
        refetchOnWindowFocus: false,
        queryFn: async () => {
            try {
                const productFetched = await fetchPublic('/products', {
                    cache: 'force-cache'
                });

                // console.log(productFetched);
                return productFetched
            } catch (error) {
                // console.error(error?.message);
                return []
            }
        }
    })

    return { products, isLoading, refetch }
}

export default useLoadAllProducts