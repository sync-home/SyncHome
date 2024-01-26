'use client'
import useAuthContext from "@/Hooks/useAuthContext";
import { Google } from "@mui/icons-material";
import { Button, Grid, IconButton, Link, Paper, TextField, Typography, } from "@mui/material";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignInPage = () => {

    const { signIn, googleLogin } = useAuthContext()
    const router = useRouter()

    // create user with email and password
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                reset()
                console.log(result.user);
                Swal.fire(
                    'Sign In Successfully',
                    'You clicked the button!',
                    'success'
                )
                router.push('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

     // create user for using google
     const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Sign In Successfully',
                    'You clicked the button!',
                    'success'
                )
                router.push('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Grid className='flex justify-center items-center min-h-screen'>
            <Paper className="py-7 px-5 w-full max-w-md my-5 mx-auto">
                <Grid align="center">
                    <h2 className='my-3 text-4xl font-bold'>Sign In</h2>
                    <Typography variant="caption" className='text-sm text-gray-400'>Sign In to access your account</Typography>
                </Grid>
                {/* input field start */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid className="space-y-4">
                        <TextField
                            {...register("email", { required: true })}
                            color="warning"
                            fullWidth
                            label="Email"
                            type="Email"
                            variant="standard"
                            placeholder="Enter Your Email Here"
                        />
                        <TextField
                            {...register("password", { required: true })}
                            color="warning"
                            fullWidth
                            label="Password"
                            type="password"
                            variant="standard"
                            placeholder="Enter Your Password Here"
                        />
                        <Button type="submit" className='btn w-full bg-gradient-to-r from-[#FF8938] to-[#F00] border-[#FF3811] rounded-md py-3 text-white mt-4'>Continue</Button>
                        {/* social login */}
                        <Grid>
                            <Typography className='px-3 text-center text-sm dark:text-gray-400'>
                                Login with social accounts
                            </Typography>
                        </Grid>
                        <Grid onClick={handleGoogle} className='flex justify-center items-center space-x-2 border m-3 p-1 border-gray-300 border-rounded cursor-pointer'>
                            <IconButton className="text-[#FF3811]">
                                <Google></Google>
                            </IconButton>
                            <Typography>Continue with Google</Typography>

                        </Grid>
                        <Typography className='px-6 text-gray-400 text-sm text-center'>
                            Don&apos;t have an account yet?{' '}
                            <Link
                                href='/signup'
                                className='hover:text-rose-500 text-gray-600 hover:pointer'
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default SignInPage;