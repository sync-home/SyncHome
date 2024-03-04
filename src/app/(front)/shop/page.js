"use client"
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import bannerBg from '@/assets/shop/smart-control-2.png';
import featureImg from '@/assets/shop/smart-control-trolly.jpg';
import FeaturedBanner from "@/components/shared/FeaturedBanner";

import giftPen from '@/assets/shop/products/grocery/pen/gift-pen.jpg';
import Image from "next/image";
import useAuthContext from "@/Hooks/useAuthContext";
import PurchaseButton from "@/components/Buttons/PurchaseButton";
import ProductCard from "@/components/shop/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import fetchPublic from "@/components/utils/getFetchedData";
import { useState } from "react";
import CategoryPanel from "@/components/shop/CategoryPanel/CategoryPanel";
const title = 'Smart Shopping'

const featuredTypeWriterHeadings = [
    'Seamless Smart Control and Remote Shopping!',
    'Your Pocket`s Command Center for Smart Living!',
    'Navigate, Shop, and Deliver with a Tap!',
    'Control, Shop, and Deliver from Anywhere!'
];

export default function Shop() {
    const { selectedProducts } = useAuthContext()
    const [ category, setCategory ] = useState('');

    /* All categories */
    const { data: categories = [], isLoading: isLoadingCategories } = useQuery({
        queryKey: [ 'categories' ],
        queryFn: async () => {
            try {
                const result = await fetchPublic('/products-categories', {
                    cache: 'force-cache'
                });

                const categories = [ ...result?.categories ];
                // console.log(categories);
                return categories
            } catch (error) {
                console.log(error?.message);
                return []
            }
        }
    })

    /* All products */
    const { data: products = [], isLoading } = useQuery({
        queryKey: [ 'products' ],
        queryFn: async () => {
            try {
                const productFetched = await fetchPublic('/products', {
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
                                    {!isLoading ?
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
                        <h2 className="text-xl md:text-2xl font-semibold text-center capitalize pb-5">Your Selected Products</h2>

                        <hr className="border-[1.5px] w-11/12 mx-auto" />

                        <Box>
                            <List sx={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}>
                                {selectedProducts?.length ? selectedProducts?.map((product, index) => <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Image src={giftPen} height="auto" width="100%" alt="Title" placeholder="blur" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={product?.title} about={product?.price} secondary={product?.specifications?.slice(0, 30) + "..."} />
                                    <Typography component={'strong'} variant="h6" sx={{ color: 'yellowgreen', fontWeight: '700' }}>{"$" + product?.price}</Typography>
                                </ListItem>) : <p className="text-center pt-10">No products selected yet.</p>}
                            </List>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', p: '10px' }}>
                                <PurchaseButton products={selectedProducts} />
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box >
        </>
    )
}