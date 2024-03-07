"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import useAxiosPublic from '@/Hooks/useAxiosPublic';

const DeviceDialog = ({ addDeviceOpen:open, setAddDeviceOpen:setOpen, sendId, refetch }) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        data.status = true;
        // console.log(data);
        // console.log(sendId);
        axiosPublic.put(`/apartments/${sendId}`, {data})
        .then(result => {
            // console.log(result.data)
            refetch();
        })
        .catch(error => {
            // console.log(error)
        })
    }


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle className='bg-[#8338EC] text-white text-center' id="responsive-dialog-title">
                    <h4>Add a Smart Device</h4>
                </DialogTitle>
                <DialogContent className='bg-[#8338EC]'>
                    <DialogContentText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                           
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="name">Device Name *</label>
                                <input 
                                style={{border: '1px solid #ccc'}} 
                                className='outline-0 px-2 rounded-md py-1' 
                                type="text" 
                                {...register("name", { required: true })} 
                                placeholder='Ex: smart lamp' 
                                id='name'/>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="brand">Brand Name *</label>
                                <input style={{border: '1px solid #ccc'}} className='outline-0 px-2 rounded-md py-1' type="text" {...register("brand", { required: true })} placeholder='Ex: xiaomi' id='brand'/>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="img">Photo URL *</label>
                                <input style={{border: '1px solid #ccc'}} className='outline-0 px-2 rounded-md py-1' type="text" {...register("img", { required: true })} placeholder='https://...' id='img'/>
                            </div>
                            <input className='w-full text-center border-2 hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer border-white rounded-md mt-5 p-1 text-white' type="submit" value="Add Device" />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='bg-[#8338EC] '>
                    <Button style={{color: 'white'}} onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeviceDialog;