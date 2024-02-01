"use client"
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { FaLocationDot, FaPhone, FaRegCircleUser, FaRegEnvelope, FaRegPenToSquare } from "react-icons/fa6";
// Modal import
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form"

const AdminProfile = ({ adminData }) => {

    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = React.useState(false);
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

    return (
        <>
            <div style={{ background: 'linear-gradient(180deg, #ffffff 100%, #0093E9 0%)' }}>
                <Box sx={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', height: '150px', width: '100%', position: 'relative', borderRadius: '10px' }}>
                    <div className='h-[120px] absolute top-20 left-10 w-[120px] rounded-full flex justify-center items-center bg-white'>
                        <Image className='rounded-full border-2 border-[#96E9C6]' src={adminData.photo} alt="admin photo" height={100} width={100} />
                    </div>
                </Box>
                <div className='mt-16 flex lg:flex-row flex-col gap-10'>
                    <div className='flex-1 w-full'>
                        <div className='flex justify-between flex-wrap gap-5 mb-2 md:mb-0'>
                            <div>
                                <h4 className='font-semibold'>{adminData.name}</h4>
                                <p className='font-semibold my-3'>{adminData.address}</p>
                            </div>
                            <div>
                                <Button onClick={handleClickOpen} size="small" variant="outlined"><FaRegPenToSquare className='mr-2' />Edit Profile</Button>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-3 font-semibold'>
                            <p>Age : {adminData.age}</p>|
                            <p>Gender : {adminData.gender}</p>|
                            <p>Status : <span className='text-green-500'>{adminData.status}</span></p>
                        </div>
                        <div className='flex mt-10 lg:gap-20 gap-0'>
                            <div className='space-y-5'>
                                <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaRegCircleUser /> Role</h3>
                                <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaRegEnvelope /> Email</h3>
                                <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaPhone /> Phone</h3>
                                <h3 className='flex gap-2 items-center font-bold text-[#363636]'><FaLocationDot /> Region</h3>
                            </div>
                            <div className='space-y-5'>
                                <p>: {adminData.role}</p>
                                <p>: {adminData.email}</p>
                                <p>: {adminData.phone}</p>
                                <p>: {adminData.region}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ border: '1px solid black' }} className='flex-1 p-5'>
                        <h3 className='font-bold text-[#363636] text-xl mb-5'>Login Activity</h3>
                        <hr />
                        {
                            adminData.login_activity.map((data, idx) => (
                                <>
                                    <div key={idx} className='py-2 flex flex-wrap gap-5'>
                                        <span>{idx + 1}.</span>
                                        <span>Logged in at </span>
                                        <span>Date : {data.date}</span>
                                        <span>Time : {data.time}</span>
                                    </div>
                                    <hr />
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle className='bg-[#8338ec]' id="responsive-dialog-title">
                        <h4 className='text-center text-white'>Update admin profile</h4>
                    </DialogTitle>
                    <DialogContent className='bg-[#8338ec]'>
                        <DialogContentText>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex gap-5 lg:flex-row flex-col'>
                                    <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="name">Name</label>
                                        <input type="text" {...register("name")} defaultValue={adminData.name} placeholder='Name' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                                    </div>
                                    <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="email">Email</label>
                                        <input type="email" {...register("email")} defaultValue={adminData.email} placeholder='Email' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                                    </div>
                                </div>
                                <div className='flex gap-5 lg:flex-row flex-col'>
                                    <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="phone">Phone</label>
                                        <input type="text" {...register("phone")} defaultValue={adminData.phone} placeholder='Phone' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                                    </div>
                                    <div className='flex-1'>
                                        <label className='text-white'>Role</label>
                                        <select {...register("role")} defaultValue={adminData.role} className='w-full p-2 text-black rounded-md'>
                                            <option value="admin">admin</option>
                                            <option value="employee">employee</option>
                                            <option value="resident">resident</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex gap-5 lg:flex-row flex-col'>
                                    <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="age">Age</label>
                                        <input type="text" {...register("age")} defaultValue={adminData.age} placeholder='Age' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                                    </div>
                                    <div className='flex-1'>
                                        <label className='text-white'>Gender</label>
                                        <select {...register("gender")} defaultValue={adminData.gender} className='w-full p-2 text-black rounded-md'>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="region">Region</label>
                                        <input type="text" {...register("region")} defaultValue={adminData.region} placeholder='Region' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
                                    </div>
                                    <div className='flex flex-col gap-0 mb-2'>
                                        <label className='text-white' htmlFor="address">Address</label>
                                        <textarea cols="5" rows="3"type="text" {...register("address")} defaultValue={adminData.address} placeholder='Address' className='outline-0 rounded-md text-black px-2 py-1 bg-white' />
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
};

export default AdminProfile;