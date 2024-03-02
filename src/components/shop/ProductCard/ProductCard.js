import SelectProductButton from '@/components/Buttons/SelectProductButton';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import giftPen from '@/assets/shop/products/grocery/pen/gift-pen.jpg';

import Image from 'next/image';
import React from 'react';
import useAuthContext from '@/Hooks/useAuthContext';

const ProductCard = ({ product }) => {
    const { selectedProducts } = useAuthContext()

    const isExists = selectedProducts.filter(theProduct => theProduct?.title === product?.title);
    const isSelected = isExists?.length > 0 ? true : false;

    return (
        <Card>
            <CardActionArea title="See details">
                <Image src={giftPen} height="auto" width="100%" alt="Title" placeholder="blur" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '500' }}>
                        <span className="font-semibold">{product?.title}</span> <span className="text-blue-800 font-semibold">${product?.price}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product?.specifications}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', p: '10px' }}>
                <SelectProductButton product={product} isSelected={isSelected} />
            </Box>
        </Card>
    );
};

export default ProductCard;