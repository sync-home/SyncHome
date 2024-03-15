import fetchPublic from '@/components/utils/getFetchedData';
import { useQuery } from '@tanstack/react-query';

const useLoadCategories = () => {
    /* All categories */
    const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
        queryKey: [ 'categories' ],
        refetchOnWindowFocus: false,
        queryFn: async () => {
            try {
                const result = await fetchPublic('/product/categories', {
                    cache: 'force-cache',
                    method: "GET"
                });

                const categories = [ ...result?.categories ];

                return categories
            } catch (error) {
                // console.log(error?.message);
                return []
            }
        }
    })

    return { categories, isLoadingCategories }
};

export default useLoadCategories;