"use client";

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Switch from '@mui/joy/Switch';
import { useState } from 'react';


const ApartSwitch = ({val}) => {

    const [checked, setChecked] = useState(val);
    // console.log(name, index, checked)
    // const axiosPublic = useAxiosPublic();
    // axiosPublic.put(`/apartments/switch/${id}`, {name, index, value:checked})
    // .then(result => {
    //     console.log(result.data)
    // })
    // .catch(error => {
    //     console.log(error)
    // })

    return (

        <Switch
            sx={checked && {
                '& .MuiSwitch-thumb': {
                    backgroundColor: '#fff',
                    border: '1px solid #fff'
                },
                '& .MuiSwitch-track': {
                    backgroundColor: '#8338ec',
                },
            }}
            variant="solid"
            size="lg"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
        />

    );
};

export default ApartSwitch;