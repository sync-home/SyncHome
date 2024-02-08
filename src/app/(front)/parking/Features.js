import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Features = ({ contents }) => {
    return (
        contents?.length && contents?.map((feature, idx) => (
            <section key={idx} className={`h-64 py-10 md:flex ${idx % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <aside className='flex-1 h-full'>
                    <Image src={feature?.img} width={"100%"} height={"100%"} className='h-full w-auto mx-auto my-auto' alt={feature?.img} />
                </aside>
                <aside className='flex-1'>
                    <Box sx={{ width: '100%', height: '100%' }} className='flex flex-col justify-center border-0'>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {feature?.content[ 0 ]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Box>
                </aside>
            </section>
        ))
    );
};

export default Features;