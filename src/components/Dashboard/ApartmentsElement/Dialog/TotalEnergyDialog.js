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

const TotalEnergyDialog = ({ totalEnergyOpen: open, setTotalEnergyOpen: setOpen, sendId }) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(sendId);
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
                    <h4>Total Energy Usage</h4>
                </DialogTitle>
                <DialogContent className='bg-[#8338EC]'>
                    <DialogContentText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Last 7 Days</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity1")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water1")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas1")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Last 30 Days</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity2")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water2")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas2")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Current Year</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity3")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water3")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas3")} />
                            </div>
                            
                            <input className='w-full text-center border-2 hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer border-white rounded-md mt-5 p-1 text-white' type="submit" value="Add Total Usage" />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='bg-[#8338EC] '>
                    <Button style={{ color: 'white' }} onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TotalEnergyDialog;