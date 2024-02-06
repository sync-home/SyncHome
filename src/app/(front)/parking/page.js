import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function Parking() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <aside>Left side</aside>
                </Grid>
                <Grid item xs={4} sx={{ minHeight: '100vh' }}>
                    <aside>Right side</aside>
                </Grid>
            </Grid>
        </Box>
    );
}
