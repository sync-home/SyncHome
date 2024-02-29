import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import bannerBg from '@/assets/shop/smart-control-2.png';
import featureImg from '@/assets/shop/smart-control-trolly.jpg';
import FeaturedBanner from "@/components/shared/FeaturedBanner";

import giftPen from '@/assets/shop/products/grocery/pen/gift-pen.jpg';
import giftPen01 from '@/assets/shop/products/grocery/pen/gift-pen-1.jpg';
import Image from "next/image";

const title = 'Smart Shopping'

const featuredTypeWriterHeadings = [
    'Seamless Smart Control and Remote Shopping!',
    'Your Pocket`s Command Center for Smart Living!',
    'Navigate, Shop, and Deliver with a Tap!',
    'Control, Shop, and Deliver from Anywhere!'
];

export default function Shop() {
    return (
        <>
            <FeaturedBanner headings={featuredTypeWriterHeadings} bannerBg={bannerBg} featureImg={featureImg} title={title} />
            <Box className="py-10">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={16} sm={10}>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            {Array.from(Array(6)).map((_, index) => (
                                <Grid item xs={16} sm={4} md={4} key={index}>
                                    <Card>
                                        <CardActionArea>
                                            <Image src={giftPen} height="auto" width="100%" alt="Title" placeholder="blur" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h3" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <span>Gift Pen</span> <span>$10</span>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={16} sm={6}>
                        Cart
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}