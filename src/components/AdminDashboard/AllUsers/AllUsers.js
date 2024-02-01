"use client";
// Modal import
import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Button, ButtonBase } from '@mui/material';
import { GrUserAdmin, GrUserWorker, GrUser } from "react-icons/gr";
import { useForm } from "react-hook-form"


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

function createData(Photo, calories, fat, carbs, protein) {
  return { Photo, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AllUsers = ({ usersData }) => {

  const { register, handleSubmit, reset } = useForm()
  const [open, setOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
    reset();
  };

  const handleClose = () => {
    setOpen(false);
  };


  const onSubmit = (data) => {
    console.log(data)
  }

  const [searchVal, setSearchVal] = React.useState('');
  const handleOnChange = e => {
    setSearchVal(e.target.value)
  }

  return (
    <>
      <div className='bg-[#96E9C6] rounded-t-md flex justify-center pt-5 flex-wrap items-center gap-5'>
        <h3>Search here :</h3>
        <input className='py-1 px-5 rounded-full outline-0' type="text" placeholder='Search by name' onChange={handleOnChange} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SL</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.filter(data => data.name.toLowerCase().includes(searchVal.toLowerCase())).map((user, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row">{idx + 1}</StyledTableCell>
                <StyledTableCell align="right">
                  <Image src={user.photo} alt='table image' height={50} width={50} className='rounded-full'></Image>
                </StyledTableCell>
                <StyledTableCell align="right">{user.name}</StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <div className='capitalize'>
                    {
                      user?.role == "admin"
                        ?
                        <div className='flex flex-col items-center text-green-500'><GrUserAdmin className='text-2xl'></GrUserAdmin><p className='font-semibold'>{user.role}</p></div>
                        : user?.role == "employee"
                          ?
                          <div className='flex flex-col items-center text-blue-500'><GrUserWorker className='text-2xl'></GrUserWorker><p className='font-semibold'>{user.role}</p></div>
                          : user?.role == "resident"
                            ?
                            <div className='flex flex-col items-center text-lime-900'><GrUser className='text-2xl'></GrUser><p className='font-semibold'>{user.role}</p></div> : ''
                    }
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button className='bg-red-500 mr-2' variant="contained" size="small">Delete</Button>
                  <span onClick={() => setUpdateData(user)}><Button onClick={handleClickOpen} className='' variant="outlined" size="small">Update</Button></span>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle className='bg-[#8338ec]' id="responsive-dialog-title">
            <h4 className='text-center text-white'>{`Update ${updateData.role}'s info`}</h4>
          </DialogTitle>
          <DialogContent className='bg-[#8338ec]'>
            <DialogContentText>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-0 mb-2'>
                  <label className='text-white' htmlFor="name">Name</label>
                  <input type="text" {...register("name")} placeholder='Name' defaultValue={updateData?.name} className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                </div>
                <div className='flex flex-col gap-0 mb-2'>
                  <label className='text-white' htmlFor="email">Email</label>
                  <input type="email" {...register("email")} placeholder='Email' defaultValue={updateData?.email} className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                </div>
                <div className='flex flex-col gap-0 mb-2'>
                  <label className='text-white' htmlFor="phone">Phone</label>
                  <input type="text" {...register("phone")} placeholder='Phone' defaultValue={updateData?.phone} className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                </div>
                <div>
                  <label className='text-white'>Role</label>
                  <select {...register("role")} defaultValue={updateData?.role} className='w-full p-1 text-black rounded-md'>
                    <option value="admin">admin</option>
                    <option value="employee">employee</option>
                    <option value="resident">resident</option>
                  </select>
                </div>
                <input className='w-full cursor-pointer bg-[#96E9C6] py-1 hover:bg-[#8338ec] border-2 border-[#96E9C6] hover:text-[#96E9C6] transition-all ease-in-out rounded-md mt-5 text-black text-center' type="submit" value="Update" />
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions className='bg-[#8338ec]'>
            <Button className='text-white' onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default AllUsers;