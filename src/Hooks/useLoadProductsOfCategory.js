import fetchPublic from '@/components/utils/getFetchedData';
import { useQuery } from '@tanstack/react-query';

const useLoadProductsOfCategory = ({ category }) => {
    /* Get products by categories */
    const { data: productsByCategory = [], isLoading: isLoadingCategory, isPending: isPendingCategory } = useQuery({
        enabled: !!category,
        queryKey: [ `products-of-${category}` ],
        queryFn: async () => {
            try {
                const productFetched = await fetchPublic(`/products-by-category/${category}`, {
                    cache: 'force-cache'
                });

                return productFetched
            } catch (error) {
                // console.log(error?.message);
                return []
            }
        }
    })

    return { productsByCategory, isLoadingCategory, isPendingCategory };
};

export default useLoadProductsOfCategory;