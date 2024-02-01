import ClearIcon from '@mui/icons-material/Clear';
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

const Notification = async () => {

    const res = await fetch('http://localhost:5000/posts', {
        cache: 'no-store'
    })
    const posts = await res.json()

    return (
        <Grid className='bg-[#EEF1F6] w-full py-16'>
            <div>
            <h2 className='text-4xl font-bold text-center mb-8 border-b-4 border-b-[#81EF61] max-w-md mx-auto'>See Your Notifications</h2>
            </div>
            <TableContainer className='max-w-[1200px] mx-auto min-h-screen pt-8  bg-[#fff] rounded-lg'>
                <Table>
                    <TableBody>
                        {posts.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar alt="Remy Sharp" src={row.img} />
                                </TableCell>
                                <TableCell className='max-w-3xl'>
                                    <p className='mb-3 rounded-md text-white  w-[90px] px-2 text-center' style={{background: row.bgColor}}>Notification</p>
                                    <span className='text-gray-600 font-bold'>{row.title}</span>

                                    <div className='p-0 mt-2'>
                                        {row.des}
                                    </div>
                                </TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    <button className='btn'>
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