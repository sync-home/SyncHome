"use client"
import ClearIcon from '@mui/icons-material/Clear';
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const Notification = async () => {


    const res = await fetch('https://synchome-server.vercel.app/api/v1/notifications', {
        cache: 'no-store'
    })
    const posts = await res.json()

    const handleDelete = async (id) => {
        const res = await axios.delete(`https://synchome-server.vercel.app/api/v1/remove-notifications/${id}`)
        console.log(res.data);

        if (res.data.deletedCount > 0) {
            refetch()
            toast.success('Deleted Successfully', {
                position: 'top-center',
                autoClose: 1300,
            })
        }
    }

    return (
        <Grid className='bg-[#EEF1F6] w-full py-16'>
            <div>
                <h2 className='text-4xl font-bold text-center mb-8 border-b-4 border-b-[#81EF61] max-w-md mx-auto'>See Your Notifications</h2>
            </div>
            <TableContainer className='max-w-[1200px] mx-auto pt-8  bg-[#fff] rounded-lg'>
                <Table>
                    <TableBody>
                        {posts.map((row) => (
                            <TableRow
                                key={row._id}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar alt="rayhan" src={row.img} />
                                </TableCell>
                                <TableCell className='max-w-3xl'>
                                    <p className='mb-3 rounded-md text-white  w-[90px] px-2 text-center' style={{ background: row.bgColor }}>Notification</p>
                                    <span className='text-gray-600 font-bold'>{row.title}</span>

                                    <div className='p-0 mt-2'>
                                        {row.des}
                                    </div>
                                </TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    <button onClick={() => handleDelete(row._id)} className='btn'>
                                        <ClearIcon className='text-md'></ClearIcon>
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