"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#9C27B0',
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#FBEEFD",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#FFF3E6",
  },
}));


const ReportPage = async () => {

  const axiosPublic = useAxiosPublic()

  const res = await fetch('http://localhost:5000/reports', {
    cache: 'no-store'
  })
  const rows = await res.json()

  // problem solved button
  const handleSolved = book => {
    const res = axios.patch(`http://localhost:5000/reports/${book._id}`)
    console.log(res);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className='border-2 border-[#9C27B0]'>
            <StyledTableCell >Issue Name</StyledTableCell>
            <StyledTableCell align='center'>Apartment</StyledTableCell>
            <StyledTableCell align='center'>Place</StyledTableCell>
            <StyledTableCell align='center'>Report Date</StyledTableCell>
            <StyledTableCell align='center'>Solved Time</StyledTableCell>
            <StyledTableCell align='center'><button>Action</button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.issue}>
              <StyledTableCell component="th" scope="row" className='border-2 border-[#F6BCFF]'>
                {row.issue}
              </StyledTableCell>
              <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>{row.apartment}</StyledTableCell>
              <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>{row.place}</StyledTableCell>
              <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>{row.date}</StyledTableCell>
              <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>{row.solved_time}</StyledTableCell>
              <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>
                {
                  row.status === 'solved' ? <span>Solved</span> : <button onClick={() => handleSolved(row)} className='btn'>Pending</button>
                }
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReportPage;