import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Notification = async () => {

    const res = await fetch('https://synchome-server.vercel.app/api/v1/notifications', {
        cache: 'no-store'
    })
    const posts = await res.json()

    return (
        <Grid className='max-w-[1200px] mx-auto min-h-screen lg:mt-16 mt-12'>
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
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                <Avatar alt="Remy Sharp" src={row.img} />
                                </TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.des}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                <button className="btn btn-ghost btn-lg">
                                    <DeleteOutlineIcon className="text-red-500"></DeleteOutlineIcon>
                                </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Notification;