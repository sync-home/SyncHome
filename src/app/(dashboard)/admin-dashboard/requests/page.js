"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#96E9C6',
        color: "#363636",
        textAlign: 'center'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const AdminRequest = () => {

    const axiosPublic = useAxiosPublic();

    // Fetch User data from database
    const { data: reqData = [], isLoading, isPending, refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/requests');
            return res?.data;
        }
    })

    console.log(reqData);
    const handleRequest = (event, id) => {
        axiosPublic.patch(`/requests/${id}`, { req: event })
            .then(result => {
                console.log(result.data)
                refetch();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <h3 className='text-[#363636] text-2xl font-bold text-center mb-10'>Manage all requests</h3>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, backgroundColor: 'rgba(109,0,255,0.2)' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>SL</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Req. Role</StyledTableCell>
                                <StyledTableCell>Status</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reqData.map((data, idx) => (
                                <StyledTableRow key={idx}>
                                    <StyledTableCell>{idx + 1}</StyledTableCell>
                                    <StyledTableCell>{data?.email}</StyledTableCell>
                                    <StyledTableCell>{data?.role}</StyledTableCell>
                                    <StyledTableCell>
                                        <span className={`${data?.status == 'accepted' ? 'text-green-600' : 'text-red-500'}`}>{data?.status}</span>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button onClick={() => handleRequest('accepted', data?._id)} variant="contained">Accept</Button>
                                        <Button onClick={() => handleRequest('declined', data?._id)} variant="outlined">Decline</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default AdminRequest;