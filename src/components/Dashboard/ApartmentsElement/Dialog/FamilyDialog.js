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

const FamilyDialog = ({ familyOpen: open, setFamilyOpen: setOpen, sendId, refetch }) => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        // console.log(data)
        // console.log(sendId);
        axiosPublic.put(`/apartments/members/${sendId}`, {data})
        .then(result => {
            // console.log(result.data)
            refetch();
        })
        .catch(error => {
                                    /* TODO: use toast to each error, to show users whats going on. */
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
                    <h4>Total Family Members</h4>
                </DialogTitle>
                <DialogContent className='bg-[#8338EC]'>
                    <DialogContentText>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="male">Male</label>
                                <input
                                    style={{ border: '1px solid #ccc' }}
                                    className='outline-0 px-2 rounded-md py-1'
                                    type="text"
                                    {...register("male", { required: true })}
                                    placeholder='Ex: 01'
                                    id='male' />
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="female">Female</label>
                                <input style={{ border: '1px solid #ccc' }} className='outline-0 px-2 rounded-md py-1' type="text" {...register("female", { required: true })} placeholder='Ex: 01' id='female' />
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className='text-white' htmlFor="child">Child</label>
                                <input style={{ border: '1px solid #ccc' }} className='outline-0 px-2 rounded-md py-1' type="text" {...register("child", { required: true })} placeholder='Ex: 01' id='child' />
                            </div>
                            <input className='w-full text-center border-2 hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer border-white rounded-md mt-5 p-1 text-white' type="submit" value="Add Family Members" />
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

export default FamilyDialog;