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
import { GrUserAdmin, GrUserWorker, GrUser, GrUserManager } from "react-icons/gr";
import { useForm } from "react-hook-form"
import useAxiosPublic from '@/Hooks/useAxiosPublic';
// import Swal from 'sweetalert2';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { useQuery } from '@tanstack/react-query';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [ `&.${tableCellClasses.head}` ]: {
    backgroundColor: '#96E9C6',
    color: "#363636",
    textAlign: 'center'
  },
  [ `&.${tableCellClasses.body}` ]: {
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


const AllUsers = () => {

  const { register, handleSubmit, reset } = useForm()
  const [ open, setOpen ] = React.useState(false);
  const [ updateData, setUpdateData ] = React.useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const axiosPublic = useAxiosPublic();


  // Fetch User data from database
  const { data: usersData = [], isLoading, isPending, refetch } = useQuery({
    queryKey: [ 'users' ],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      return res?.data;
    }
  })


  const handleClickOpen = () => {
    setOpen(true);
    reset();
  };

  const handleClose = () => {
    setOpen(false);
  };


  const onSubmit = (data) => {
    console.log(data)
    console.log(updateData._id)
    axiosPublic.patch(`/update-user/${updateData?._id}`, { data })
      .then(result => {
        console.log(result.data)
        refetch();
      })
      .catch(error => {
        console.log(error)
      })
  }

  const [ searchVal, setSearchVal ] = React.useState('');
  const handleOnChange = e => {
    setSearchVal(e.target.value)
  }

  const handleDeleteUser = (id) => {
    console.log(id);
    // const swalWithBootstrapButtons = Swal.mixin({
    //   customClass: {
    //     confirmButton: "hover:no-underline bg-[#8338EC] px-5 py-1 text-white rounded-sm mr-1",
    //     cancelButton: "hover:no-underline bg-[#96E9C6] px-5 py-1 text-white rounded-sm"
    //   },
    //   buttonsStyling: false
    // });
    // swalWithBootstrapButtons.fire({
    //   title: "Are you sure?",
    //   text: "You want to delete this user",
    //   showCancelButton: true,
    //   confirmButtonText: "Delete",
    //   cancelButtonText: "Cancel",
    //   reverseButtons: false
    // }).then((result) => {
    //   if (result.isConfirmed) {

    axiosPublic.delete(`/delete-user/${id}`)
      .then(result => {
        console.log(result.data)
        refetch();
        // swalWithBootstrapButtons.fire({
        //   title: "Deleted!",
        //   text: "User has been deleted successfully",
        // });
      })
      .catch(error => {
        console.log(error)
      })
    //   } 
    // });
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
            {
              isLoading || isPending ? <p>Users Loading...</p> : usersData?.length ? usersData?.filter(data => data?.name.toLowerCase().includes(searchVal.toLowerCase())).map((user, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row">{idx + 1}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Image src={user?.photo} alt='table image' height={50} width={50} className='rounded-full'></Image>
                  </StyledTableCell>
                  <StyledTableCell align="right">{user?.name}</StyledTableCell>
                  <StyledTableCell align="right">{user?.email}</StyledTableCell>
                  <StyledTableCell align="right">{user?.phone}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div className='capitalize'>
                      {
                        user?.role == "admin"
                          ?
                          <div className='flex flex-col items-center text-green-500'><GrUserAdmin className='text-2xl' /><p className='font-semibold'>{user?.role}</p></div>
                          : user?.role == "employee"
                            ?
                            <div className='flex flex-col items-center text-blue-500'><GrUserWorker className='text-2xl' /><p className='font-semibold'>{user?.role}</p></div>
                            : user?.role == "resident"
                              ?
                              <div className='flex flex-col items-center text-lime-900'><GrUser className='text-2xl' /><p className='font-semibold'>{user?.role}</p></div>
                              : user?.role == "guest"
                                ?
                                <div className='flex flex-col items-center text-orange-500'><GrUserManager className='text-2xl' /><p className='font-semibold'>{user?.role}</p></div> : ''
                      }
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button onClick={() => handleDeleteUser(user?._id)} className='bg-red-500 mr-2' variant="contained" size="small">Delete</Button>
                    <span onClick={() => setUpdateData(user)}><Button onClick={handleClickOpen} className='' variant="outlined" size="small">Update</Button></span>
                  </StyledTableCell>
                </StyledTableRow>
              )) : <p>Data not found</p>}
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
            <h4 className='text-center text-white'>{`Update ${updateData?.role}'s info`}</h4>
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
                    <option value="guest">guest</option>
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