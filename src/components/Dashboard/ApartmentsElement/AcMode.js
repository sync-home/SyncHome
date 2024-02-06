"use client";

import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FaFan, FaSun, FaWind } from 'react-icons/fa';

const AcMode = () => {
    const [mode, setMode] = useState('mode1');

    const handleModeChange = (event, newMode) => {
        if (newMode !== null) {
            setMode(newMode);
        }
    };

    return (
        <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleModeChange}
            aria-label="text alignment"
        >
            <ToggleButton
                value="mode1"
                aria-label="mode1"
                sx={{
                    borderRadius: '20px',
                    marginRight: '8px',
                    color: '#363636',
                    backgroundColor: mode === 'mode1' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'mode1' ? '#303f9f' : '#aaaaaa',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#8338ec',
                        color: '#fff'
                      },
                }}
            >
                <FaSun className='mr-1'/>
                Auto
            </ToggleButton>
            <ToggleButton
                value="mode2"
                aria-label="mode2"
                sx={{
                    borderRadius: '20px',
                    marginRight: '8px',
                    color: '#363636',
                    backgroundColor: mode === 'mode2' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'mode2' ? '#303f9f' : '#aaaaaa',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#8338ec',
                        color: '#fff'
                      },
                }}
            >
                <FaWind className='mr-1'/>
                Wind
            </ToggleButton>
            <ToggleButton
                value="mode3"
                aria-label="mode3"
                sx={{
                    borderRadius: '20px',
                    color: '#363636',
                    backgroundColor: mode === 'mode3' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'mode3' ? '#303f9f' : '#aaaaaa',
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#8338ec',
                        color: '#fff'
                      },
                }}
            >
                <FaFan className='mr-1'/>
                Swing
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default AcMode;
