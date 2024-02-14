'use client'
import useAuthContext from "@/Hooks/useAuthContext";
import { Google } from "@mui/icons-material";
import { Button, Grid, IconButton, Link, Paper, TextField, Typography, } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "@/Hooks/useAxiosPublic";

const SignInPage = () => {

    const { logIn, googleLogin } = useAuthContext()
    const router = useRouter()
    const axiosPublic = useAxiosPublic();

    // create user with email and password
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        logIn(data.email, data.password)
            .then(result => {
                reset()
                console.log(result.user);
                axiosPublic.put(`/userLoginActivity/${result?.user?.email}`, {data: result?.user?.metadata?.lastSignInTime})
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })

                 // toast
                 toast.success('Sign Up Successfully', {
                    position: 'top-center',
                    autoClose: 1300,
                })

                router.push('/')
            })
            .catch(error => {
                console.log(error);
                toast.error('Please Provide an Current email/password', {
                    position: 'top-center',
                    autoClose: 1300,
                })
            })
    }

     // create user for using google
     const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                 // toast
                    toast.success('Sign Up Successfully', {
                        position: 'top-center',
                        autoClose: 1300,
                    })
                    
                router.push('/')
            })
            .catch(error => {
                console.log(error);
                toast.error('Please Provide an Current email/password', {
                    position: 'top-center',
                    autoClose: 1300,
                })
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
                            <IconButton>
                                <FcGoogle></FcGoogle>
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