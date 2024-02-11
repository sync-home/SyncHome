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

const WeeklyDialog = ({ weeklyOpen: open, setWeeklyOpen: setOpen, sendId, refetch }) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        console.log(sendId);
        axiosPublic.put(`/apartments/weekly/${sendId}`, {data})
        .then(result => {
            console.log(result.data)
        })
        .catch(error => {
            console.log(error)
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
                    <h4>Weekly Energy Usage Analytics</h4>
                </DialogTitle>
                <DialogContent className='bg-[#8338EC]'>
                    <DialogContentText>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Monday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity1")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water1")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas1")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Tuesday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity2")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water2")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas2")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Wednesday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity3")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water3")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas3")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Thursday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity4")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water4")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas4")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Friday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity5")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water5")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas5")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-2'>
                                <label className='text-white'>Saturday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity6")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water6")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas6")} />
                            </div>
                            <div className='flex flex-row gap-1 mb-5'>
                                <label className='text-white'>Sunday</label>
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Electricity' {...register("electricity7")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='Water' {...register("water7")} />
                                <input className='w-1/4 outline-0 px-1 rounded-md' type="text" placeholder='gas' {...register("gas7")} />
                            </div>
                            <input className='w-full text-center border-2 hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer border-white rounded-md mt-5 p-1 text-white' type="submit" value="Add Weekly Data" />
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

export default WeeklyDialog;