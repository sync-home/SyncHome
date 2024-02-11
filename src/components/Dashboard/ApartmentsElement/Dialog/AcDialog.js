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

const AcDialog = ({ acOpen:open, setAcOpen:setOpen, sendId }) => {

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
                    <h4>Add a Airconditionar</h4>
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
                                placeholder='Ex: Airconditionar' 
                                id='name'/>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="brand">Brand Name *</label>
                                <input style={{border: '1px solid #ccc'}} className='outline-0 px-2 rounded-md py-1' type="text" {...register("brand", { required: true })} placeholder='Ex: LG Dualcool Inverter' id='brand'/>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="temp">Temperature *</label>
                                <input style={{border: '1px solid #ccc'}} className='outline-0 px-2 rounded-md py-1' type="text" {...register("temp", { required: true })} placeholder='Temp here' id='temp'/>
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="mode">Mode *</label>
                                <select style={{border: '1px solid #ccc'}} className='outline-0 px-2 rounded-md py-1' {...register("mode", { required: true })} id='mode'>
                                    <option value="auto">Auto</option>
                                    <option value="wind">Wind</option>
                                    <option value="swing">Swing</option>
                                </select>
                            </div>
                            <input className='w-full text-center border-2 hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer border-white rounded-md mt-5 p-1 text-white' type="submit" value="Add Aircondition" />
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

export default AcDialog;