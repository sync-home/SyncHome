"use client"
import useAuthContext from "@/Hooks/useAuthContext";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { Button, Grid, IconButton, Link, Paper, TextField, Typography, } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const { createUser, googleLogin, updateUserInfo } = useAuthContext()
    const router = useRouter()
    const axiosPublic = useAxiosPublic()

    // create user with email and password
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserInfo(data?.name, data?.photo)
                .then(() => {
                    const userInfo = {
                        name: data?.name,
                        email: data?.email,
                        photo: data?.photo,
                        login_activity: [{"date": `${new Date().toUTCString()}`}],
                        phone: 'N/A',
                        role: "guest",
                        status: 'active'
                    }
                    axiosPublic.post('new-user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset()
                            toast.success('Sign Up Successful', {
                                position: 'top-center',
                                autoClose: 1300,
                            })
                            router.push('/signin')
                        }
                    })
                    
                }).catch((error) => {
                    console.log(error);
                })
            })
    }

    // create user for using google
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photo: result?.user?.photoURL,
                    login_activity: [{"date": `${result?.user?.metadata?.lastSignInTime}`}],
                    phone: 'N/A',
                    role: "guest",
                    status: 'active'
                }
                axiosPublic.post('new-user', userInfo)
                 // toast
                 toast.success('Sign Up Successful', {
                    position: 'top-center',
                    autoClose: 1300,
                })
                router.push('/signin')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Grid className='flex justify-center items-center min-h-screen'>
            <Paper className="py-7 px-5 w-full max-w-md my-5 mx-auto">
                <Grid align="center">
                    <h2 className='my-3 text-4xl font-bold'>Sign Up</h2>
                    <Typography variant="caption" className='text-sm text-gray-400'>Sign up to access your account.</Typography>
                </Grid>
                {/* input field start */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid className="space-y-4">
                        <TextField
                            {...register("name", { required: true })}
                            color="warning"
                            fullWidth
                            label="Name"
                            type="Text"
                            variant="standard"
                            placeholder="Enter Your Name Here"
                        />
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
                            {...register("photo")}
                            color="warning"
                            fullWidth
                            label="Photo URL"
                            type="url"
                            variant="standard"
                            placeholder="Enter Your Photo URL Here"
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
                            Have an account? Please{' '}
                            <Link
                                href='/signin'
                                className='hover:underline hover:text-rose-500 text-gray-600 hover:pointer'
                            >
                                Sign In
                            </Link>
                        </Typography>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
};

export default SignUpPage;