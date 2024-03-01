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

const title = 'Smart Shopping'

const featuredTypeWriterHeadings = [
    'Seamless Smart Control and Remote Shopping!',
    'Your Pocket`s Command Center for Smart Living!',
    'Navigate, Shop, and Deliver with a Tap!',
    'Control, Shop, and Deliver from Anywhere!'
];

export default function Shop() {
    const { selectedProducts } = useAuthContext()

    const demo = {
        title: 'Gift pen 2 pics',
        price: 10,
        specifications: 'Our new brand for pen, each pan has 3ml ink and 0.02mm nip radius. You can write 1000m.'
    }

    return (
        <>
            <FeaturedBanner headings={featuredTypeWriterHeadings} bannerBg={bannerBg} featureImg={featureImg} title={title} />
            <Box className="py-10">
                {/* main product box-container */}
                <Grid container spacing={2} columns={16} className="px-5">
                    {/* row */}
                    <Grid item xs={16} sm={10}>
                        {/* left column [products card] */}
                        <h2 className="text-xl md:text-2xl font-semibold capitalize mb-5">Pen - Grocery products</h2>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {/* product grid container */}
                            {Array.from(Array(6).fill(demo)).map((product, index) => {
                                return (
                                    <Grid item xs={16} sm={6} lg={4} key={index}>
                                        {/* Product grid */}
                                        <ProductCard product={product} />
                                    </Grid>
                                )
                            })}
                        </Grid>
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


            </Box>
        </>
    )
}