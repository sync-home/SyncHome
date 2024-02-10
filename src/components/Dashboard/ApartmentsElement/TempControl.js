"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { FaTemperatureHigh } from 'react-icons/fa6';

const Input = styled(MuiInput)`
  width: 42px;
`;


const TempControl = ({temp}) => {

    const [value, setValue] = React.useState(temp?.temp);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div>
            <div>
                <div style={{boxShadow: '0px 0px 8px #ccc'}} className="h-40 w-40 flex mb-5 items-center justify-center text-2xl font-bold rounded-full mx-auto">
                    <div className='h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center'>
                        <p>{value}°C</p>
                    </div>
                </div>
            </div>
            <Box sx={{ width: 250, marginX: 'auto' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <FaTemperatureHigh />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default TempControl;