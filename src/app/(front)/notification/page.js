"use client"
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useGetRole from '@/Hooks/useGetRole';
import ClearIcon from '@mui/icons-material/Clear';
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

const Notification = async () => {

    const axiosPublic = useAxiosPublic()
    const {role} = useGetRole();

    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get('https://synchome-server.vercel.app/api/v1/notifications');
            return res?.data;
        }
    })


    const handleDelete = async (id) => {
        const res = await axios.delete(`https://synchome-server.vercel.app/api/v1/remove-notification/${id}`)


        if (res.data.deletedCount > 0) {
            refetch()
            const deletedItem = posts.find(post => post._id === id);
            
            {
                role === "guest" && axiosPublic.post('/trash', deletedItem)
            }
            toast.success('Deleted Successfully', {
                position: 'top-center',
                autoClose: 1300,
            })
        }
    }

    return (
        <Grid className='bg-[#EEF1F6] w-full py-16'>
            <div>
                <h2 className='text-4xl font-bold text-center mb-16 border-b-4 border-b-[#81EF61] max-w-md mx-auto'>See Your Notifications</h2>
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