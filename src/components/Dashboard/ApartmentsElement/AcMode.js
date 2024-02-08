"use client";

import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FaFan, FaSun, FaWind } from 'react-icons/fa';

const AcMode = ({val}) => {
    const [mode, setMode] = useState(val);

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
                value="auto"
                aria-label="auto"
                sx={{
                    borderRadius: '20px',
                    marginRight: '8px',
                    color: '#363636',
                    backgroundColor: mode === 'auto' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'auto' ? '#303f9f' : '#aaaaaa',
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
                value="wind"
                aria-label="wind"
                sx={{
                    borderRadius: '20px',
                    marginRight: '8px',
                    color: '#363636',
                    backgroundColor: mode === 'wind' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'wind' ? '#303f9f' : '#aaaaaa',
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
                value="swing"
                aria-label="swing"
                sx={{
                    borderRadius: '20px',
                    color: '#363636',
                    backgroundColor: mode === 'swing' ? '#3f51b5' : '#cccccc',
                    '&:hover': {
                        backgroundColor: mode === 'swing' ? '#303f9f' : '#aaaaaa',
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
