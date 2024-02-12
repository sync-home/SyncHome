"use client";

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Switch from '@mui/joy/Switch';
import { useState } from 'react';


const ApartSwitch = ({val}) => {

    const [checked, setChecked] = useState(val);

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