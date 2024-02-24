'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import useAuthContext from '@/Hooks/useAuthContext';
import Swal from 'sweetalert2';
import MaintenanceStatus from '../maintenance-status/page';
import WashingCloth from '@/components/Dashboard/ResidentDashboard/WashingCloth/WashingCloth';

const WashingMachine = () => {
  const { user } = useAuthContext();
  const email = user?.email;
  const [status, setStatus] = useState('Idle');
  const [remainingTime, setRemainingTime] = useState(0);
  const [selectedCycle, setSelectedCycle] = useState('Normal');
  const [clothType, setClothType] = useState('');
  const [clothName, setClothName] = useState('');
  const [clothQuantity, setClothQuantity] = useState('');

  useEffect(() => {
    let timer;
    if (status === 'Running') {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [status]);

  const handleStart = () => {
    setStatus('Running');
    setRemainingTime(1800); // 30 minutes (1800 seconds)
  };

  const handlePause = () => {
    setStatus('Paused');
  };

  const handleStop = () => {
    setStatus('Idle');
    setRemainingTime(0);
  };

  const handleCycleChange = (e) => {
    setSelectedCycle(e.target.value);
  };

  const handleClothTypeChange = (e) => {
    setClothType(e.target.value);
  };

  const handleClothNameChange = (e) => {
    setClothName(e.target.value);
  };

  const handleClothQuantityChange = (e) => {
    setClothQuantity(e.target.value);
  };

  const sendDataToBackend = () => {
    
    axios.post('https://synchome-server.vercel.app/api/v1/washing-machine', {
      status,
      remainingTime,
      clothType,
      clothName,
      clothQuantity,
      email

    })
    .then(response => {
      if(response.data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Ok",
          text: "Your cloth washing has been complete",
        });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    })
    .catch(error => {
      console.error('Error sending data to backend:', error);
      // Handle error if needed
    });
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom className='pb-3'>
        Washing Machine
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Select Cycle</InputLabel>
            <Select value={selectedCycle} onChange={handleCycleChange}>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Quick">Quick</MenuItem>
              <MenuItem value="Delicate">Delicate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Status: {status}</Typography>
          <Typography variant="body1">Remaining Time: {remainingTime} seconds</Typography>
        </Grid>
        <Grid item xs={12} className='space-y-3'>
          <FormControl fullWidth>
            <InputLabel>Select Cloth Type</InputLabel>
            <Select value={clothType} onChange={handleClothTypeChange}>
              <MenuItem value="Cotton">Cotton</MenuItem>
              <MenuItem value="Silk">Silk</MenuItem>
              <MenuItem value="Wool">Wool</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Cloth Name"
            variant="outlined"
            value={clothName}
            onChange={handleClothNameChange}
          />
          <TextField
            fullWidth
            label="Quantity"
            variant="outlined"
            value={clothQuantity}
            onChange={handleClothQuantityChange}
          />
        </Grid>
       
        <Grid item xs={12} className='space-x-3'>
          <Button variant="contained" onClick={handleStart} disabled={status !== 'Idle'}>
            Start
          </Button>
          <Button variant="contained" onClick={handlePause} disabled={status !== 'Running'}>
            Pause
          </Button>
          <Button variant="contained" onClick={handleStop} disabled={status === 'Idle'}>
            Stop
          </Button>
          <Button
            className="mt-4"
            variant="contained"
            onClick={sendDataToBackend}
          >
            Done
          </Button>
        </Grid>
      </Grid>
      <WashingCloth />
    </div>
  );
};

export default WashingMachine;