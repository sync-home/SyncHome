'use client'
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
import { Card } from '@mui/material';
import { FaCheck, FaHourglass } from 'react-icons/fa';
import { FaTriangleExclamation } from 'react-icons/fa6';
import useAxiosPublic from '@/Hooks/useAxiosPublic';


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


const ReportPage = () => {
const axiosPublic = useAxiosPublic();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const { data: rows = [], refetch } = useQuery({
    queryKey: ['reports'],
    queryFn: async () => {
      const res = await axiosPublic.get('/reports');
      return res?.data;
    }
  })

  const countStatus = (rows, status) => {
    return rows.filter(obj => obj.hasOwnProperty('status') && obj.status === status).length;
  }

  const solvedCount = countStatus(rows, 'solved');
  // Get the number of objects with "pending" status
  const pendingCount = countStatus(rows, 'pending');

  // problem solved button
  const handleSolved = book => {
    const res = axios.patch(`https://synchome-server.vercel.app/api/v1/reports/${book._id}`)
    
      .then(res => {
        refetch()
      })
  }

  return (
    <div>
      <div>
        <Card className='mb-8'>
          <h2 className="text-xl font-bold p-2 px-4">Report</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-5 mb-5 mt-2">
            {/* 1st nested card */}
            <div className={`w-full px-6 py-4 bg-[#FFE2E6] rounded-2xl`}>
              <div>
                <FaTriangleExclamation className='text-4xl bg-[#FA5A7C] p-2 rounded-full text-white'></FaTriangleExclamation>
                <h4 className='text-2xl font-bold mt-2'>{rows.length}</h4>
              </div>
              <p className="mt-2">Total Report</p>
              <p className="mt-2 text-[#5D60EF]">2% from Yesterday</p>
            </div>

            {/* 2nd nested card */}
            <div className={`w-full px-6 py-4 bg-[#DCFCE7] rounded-2xl`}>
              <div>
                <FaCheck className='text-4xl bg-[#3CD755] p-2 rounded-full text-white'></FaCheck>
                <h4 className='text-2xl font-bold mt-2'>{solvedCount}</h4>
              </div>
              <p className="mt-2">Solved</p>
              <p className="mt-2 text-[#5D60EF]">2% from Yesterday</p>
            </div>

            {/* 3rd nested card */}
            <div className={`w-full px-6 py-4 bg-[#FFF4DE] rounded-2xl`}>
              <div>
                <FaHourglass className='text-4xl bg-[#FF947A] p-2 rounded-full text-white'></FaHourglass>
                <h4 className='text-2xl font-bold mt-2'>{pendingCount}</h4>
              </div>
              <p className="mt-2">Pending</p>
              <p className="mt-2 text-[#5D60EF]">2% from Yesterday</p>
            </div>
          </div>
        </Card>
      </div>

      {/* table section */}
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
                <StyledTableCell align='center' className='border-2 border-[#F6BCFF]'>
                  {
                    row.status === 'solved' ? <span>{formattedDate}</span> : ""
                  }
                </StyledTableCell>
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
    </div>
  );
};

export default ReportPage;