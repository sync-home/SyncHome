import useAuthContext from "@/Hooks/useAuthContext";
import PurchaseButton from "@/components/Buttons/PurchaseButton";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import giftPen from '@/assets/shop/products/grocery/pen/gift-pen.jpg';


const SelectedProductsInCart = () => {
    const { selectedProducts } = useAuthContext()

    return (
        <>
            {/* right column [Cart] */}
            <h2 className="text-xl md:text-2xl font-semibold text-center capitalize pb-5">Your Selected Products</h2>

            <hr className="border-[1.5px] w-11/12 mx-auto" />

            <Box>
                <List sx={{ width: '100%', maxWidth: 360, backgroundColor: 'background.paper' }}>
                    {selectedProducts?.length ? selectedProducts?.map((product, index) => <ListItem key={index} >
                        <ListItemAvatar>
                            <Avatar>
                                <Image src={giftPen} height="auto" width="100%" alt="Title" placeholder="blur" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={product?.title} about={product?.price} />
                        <Typography component={'strong'} variant="h6" sx={{ color: 'yellowgreen', fontWeight: '700' }}>{"$" + product?.price}</Typography>
                    </ListItem>) : <p className="text-center pt-10">No products selected yet.</p>}
                </List>
                <Box sx={{ width: '100%', display: selectedProducts?.length ? 'flex' : 'none', justifyContent: 'flex-end', }}>
                    <PurchaseButton products={selectedProducts} />
                </Box>
            </Box>

        </>
    );
};

export default SelectedProductsInCart;