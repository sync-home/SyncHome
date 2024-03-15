'use client'
import { Grid } from '@mui/material';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductCard from '../ProductCard/ProductCard';
import CategoryPanel from '../CategoryPanel/CategoryPanel';
import useAuthContext from '@/Hooks/useAuthContext';
import { useState } from 'react';
import Loader from '@/components/loader/Loader';
import useLoadCategories from '@/Hooks/useLoadCategories';
import useLoadProductsOfCategory from '@/Hooks/useLoadProductsOfCategory';

const Products = () => {
    const { products, isLoading: isLoadingProducts } = useAuthContext()
    const [ category, setCategory ] = useState('');

    /* All categories */
    const { categories, isLoadingCategories } = useLoadCategories()

    /* Get products by categories */
    const { productsByCategory, isLoadingCategory, isPendingCategory } = useLoadProductsOfCategory({ category })

    /* Tab controlled function */
    const handleCategoryTab = (index) => {
        if (index) {
            setCategory(categories[ index - 1 ])
            // console.log(index, category, productsByCategory);
        }
    }
    return (
        <div>
            <Tabs defaultIndex={0} onSelect={(index) => handleCategoryTab(index)} >
                <TabList className="capitalize text-xl">
                    <Tab>All</Tab>
                    {!isLoadingCategories ? categories?.length > 0 ? categories.map((category, idx) => <Tab key={idx}>{category}</Tab>) : '' : ''}
                </TabList>

                {/* TODO: use lazy loader to load all data on a page */}
                <TabPanel>
                    {/* left column [products card] */}
                    <h2 className="text-xl md:text-2xl font-semibold capitalize mb-5">All products</h2>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {/* product grid container */}
                        {!isLoadingProducts ?
                            products?.length > 0 ?
                                products.map((product, index) => {
                                    // console.log(product);
                                    return (
                                        <Grid item xs={16} sm={6} lg={4} key={index} alignItems={'stretch'}>
                                            {/* Product grid */}
                                            <ProductCard product={product} />
                                        </Grid>
                                    )
                                }) : 'No data found'
                            : <Loader loaderOpen={isLoadingProducts} />}
                    </Grid>
                </TabPanel>

                <Grid container spacing={2} columns={16} className="px-5">
                    {/* row */}
                    {
                        !isLoadingCategories ?
                            categories?.length > 0 &&
                            categories.map((category, idx) => <TabPanel key={idx}>
                                {
                                    !isPendingCategory && !isLoadingCategory ?
                                        <CategoryPanel products={productsByCategory} category={category} />
                                        : <Loader loaderOpen={isPendingCategory || isLoadingCategory} />
                                }
                            </TabPanel>)
                            : <Loader loaderOpen={isLoadingCategories} />
                    }
                </Grid>
            </Tabs>
        </div>
    );
};

export default Products;