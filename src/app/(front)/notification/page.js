import DeleteButton from '@/components/Buttons/DeleteButton';
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Suspense } from 'react';
import Loading from './loading';

const Notification = async () => {
    const posts = await getNotifications();

    console.log(posts);
    return (
        <Grid className='max-w-[1200px] mx-auto min-h-screen lg:mt-16 mt-12'>
            <Suspense fallback={Loading}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow className='bg-[#4DAC6A]'>
                                <TableCell className='text-white'>Profile</TableCell>
                                <TableCell className='text-white'>Title</TableCell>
                                <TableCell className='text-white'>Description</TableCell>
                                <TableCell className='text-white'>Date</TableCell>
                                <TableCell className='text-white'>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map((row) => (
                                <TableRow
                                    key={row?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Avatar alt="Remy Sharp" src={row?.img} />
                                    </TableCell>
                                    <TableCell>{row?.title}</TableCell>
                                    <TableCell>{row?.des}</TableCell>
                                    <TableCell>{row?.date}</TableCell>
                                    <TableCell>
                                        <DeleteButton id={row?._id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Suspense>
        </Grid>
    );
};


const getNotifications = async () => {
    const res = await fetch('https://synchome-server.vercel.app/api/v1/notifications', {
        cache: 'no-store'
    })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default Notification;