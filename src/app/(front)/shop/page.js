"use client"
import { Box, Grid } from "@mui/material";
import bannerBg from '@/assets/shop/smart-control-2.png';
import featureImg from '@/assets/shop/smart-control-trolly.jpg';
import FeaturedBanner from "@/components/shared/FeaturedBanner";

import useAuthContext from "@/Hooks/useAuthContext";
import ProductCard from "@/components/shop/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import fetchPublic from "@/components/utils/getFetchedData";
import { useState } from "react";
import CategoryPanel from "@/components/shop/CategoryPanel/CategoryPanel";
import SelectedProductsInCart from "@/components/shop/SelectedProducts/SelectedProductsInCart";
const title = 'Smart Shopping'

const featuredTypeWriterHeadings = [
    'Seamless Smart Control and Remote Shopping!',
    'Your Pocket`s Command Center for Smart Living!',
    'Navigate, Shop, and Deliver with a Tap!',
    'Control, Shop, and Deliver from Anywhere!'
];

export default function Shop() {
    const { products, isLoading: isLoadingProducts } = useAuthContext()
    const [ category, setCategory ] = useState('');

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
                console.log(error?.message);
                return []
            }
        }
    })

    /* Get products by categories */
    const { data: productsByCategory = [], isLoading: isLoadingCategory, isPending: isPendingCategory } = useQuery({
        enabled: !!category,
        queryKey: [ category ],
        queryFn: async () => {
            try {
                const productFetched = await fetchPublic(`/products-by-category/${category}`, {
                    cache: 'force-cache'
                });
                // console.log(productFetched);
                return productFetched
            } catch (error) {
                console.log(error?.message);
                return []
            }
        }
    })

    /* Tab controlled function */
    const handleCategoryTab = (index) => {
        if (index) {
            setCategory(categories[ index - 1 ])
            console.log(index, category, productsByCategory);
        }
    }

    return (
        <>
            <FeaturedBanner headings={featuredTypeWriterHeadings} bannerBg={bannerBg} featureImg={featureImg} title={title} />
            <Box className="py-10">
                <Grid container spacing={2} columns={16} className="px-5">
                    {/* row */}
                    <Grid item xs={16} sm={10}>
                        {/* main product box-container */}
                        <Tabs defaultIndex={0} onSelect={(index) => handleCategoryTab(index)} >
                            <TabList>
                                <Tab>All</Tab>
                                {!isLoadingCategories ? categories?.length > 0 ? categories.map((category, idx) => <Tab key={idx}>{category}</Tab>) : '' : ''}
                            </TabList>

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
                                                    <Grid item xs={16} sm={6} lg={4} key={index}>
                                                        {/* Product grid */}
                                                        <ProductCard product={product} />
                                                    </Grid>
                                                )
                                            }) : 'No data found'
                                        : 'Loading...'}
                                </Grid>
                            </TabPanel>

                            <Grid container spacing={2} columns={16} className="px-5">
                                {/* row */}
                                {
                                    !isLoadingCategories ?
                                        categories?.length > 0 ?
                                            categories.map((category, idx) => <TabPanel key={idx}>
                                                {
                                                    !isPendingCategory && !isLoadingCategory ?
                                                        <CategoryPanel products={productsByCategory} category={category} />
                                                        : 'Loading...'
                                                }
                                            </TabPanel>)
                                            : 'No Categories'
                                        : 'Loading...'
                                }
                            </Grid>


                        </Tabs>

                    </Grid>


                    <Grid item xs={16} sm={6}>
                        {/* right column [Cart] */}
                        <SelectedProductsInCart />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}