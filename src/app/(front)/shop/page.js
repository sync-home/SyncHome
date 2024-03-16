import { Box, Grid } from "@mui/material";
import bannerBg from '@/assets/shop/smart-control-2.png';
import featureImg from '@/assets/shop/smart-control-trolly.jpg';
import FeaturedBanner from "@/components/shared/FeaturedBanner";
import SelectedProductsInLS from "@/components/shop/SelectedProducts/SelectedProductsInLS";
import Products from "@/components/shop/products/Products";
import 'react-tabs/style/react-tabs.css';

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
                <Grid container spacing={2} columns={16} className="px-5" >
                    {/* row */}
                    <Grid item xs={16} sm={10} >
                        {/* main product box-container */}
                        <Products />
                    </Grid>


                    <Grid item xs={16} sm={6}>
                        {/* right column [Cart] */}
                        <SelectedProductsInLS />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}