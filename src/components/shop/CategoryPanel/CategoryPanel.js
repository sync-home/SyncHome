import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const CategoryPanel = ({ products, category }) => {
    return (
        <>
            {/* left column [products card] */}
            <h2 className="text-xl md:text-2xl font-semibold capitalize my-5">Pen - {category} products</h2>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {/* product grid container */}
                {products?.length > 0 ?
                    products.map((product, index) => {
                        // console.log(product);
                        return (
                            <Grid item xs={16} sm={6} lg={4} key={index}>
                                {/* Product grid */}
                                <ProductCard product={product} />
                            </Grid>
                        )
                    }) : 'No data found'
                }
            </Grid>
        </>
    );
};

export default CategoryPanel;