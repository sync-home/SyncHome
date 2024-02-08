import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Features = ({ contents }) => {
    return (
        <Box sx={{ py: 5 }}>
            {contents?.length && contents?.map((feature, idx) => (
                <Card key={idx} className={`md:h-64 rounded-none hover:bg-gray-100 max-md:px-2 my-10 flex max-md:flex-col ${idx % 2 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {/* feature image */}
                    <aside className='flex-1 md:w-full'>
                        <Image src={feature?.img} width={"100%"} height={"100%"} className='md:h-full w-full mx-auto my-auto' alt={feature?.img} />
                    </aside>

                    {/* feature contents */}
                    <aside className='flex-1'>
                        <Box sx={{ width: '100%', height: '100%' }} className='flex flex-col justify-center border-0'>
                            <CardContent>
                                <Typography variant="h6" component="h4">
                                    {feature?.content[ 0 ]}
                                </Typography>
                                <Typography gutterBottom component="h5" color="text.secondary" className='text-xs mb-4'>
                                    {feature?.content[ 1 ]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='text-justify'>
                                    {feature?.content[ 2 ]?.length > 300 ? feature?.content[ 2 ]?.slice(0, 300) + '...' : feature?.content[ 2 ]}
                                </Typography>
                            </CardContent>
                            <CardActions className='block'>
                                <Link href={feature?.link} className='float-end text-blue-500 hover:underline underline-offset-4 font-mono font-semibold text-xs'>See More &rarr;</Link>
                            </CardActions>
                        </Box>
                    </aside>
                </Card>
            ))}
        </Box>
    );
};

export default Features;