"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnergyUsesAnalytic from '@/components/RTM/EnergyUsesAnalytic';
import SecurityMobitoring from '@/components/RTM/SecurityMobitoring';
import ParkingSpaceAvailability from '@/components/RTM/ParkingSpaceAvailability';
import VisitorManagement from '@/components/RTM/VisitorManagement';





const RTM = () => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
    
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 2 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            {/* <Container> */}
            {/* bgcolor: 'background.paper', */}
                <Box 
                    sx={{ flexGrow: 1,  display: 'flex', ml: 5, }}
                >
                    <Tabs className="w-2/12 bg-rose-500"
                        orientation="vertical"
                        // variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', pr: 4, fontWeight: 'bold' }}
                    >
                        <Tab className='font-semibold mt-10' label="Energy Usage Analytics" {...a11yProps(0)} />
                        <Tab className='font-semibold' label="Security Monitoring" {...a11yProps(1)} />
                        <Tab className='font-semibold' label="Visitor Management" {...a11yProps(2)} />
                        <Tab className='font-semibold' label="Parking Space Availability" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel className="w-10/12" value={value} index={0}>
                        <EnergyUsesAnalytic></EnergyUsesAnalytic>
                    </TabPanel>
                    <TabPanel className="w-10/12" value={value} index={1}>                       
                            <SecurityMobitoring></SecurityMobitoring>
                    </TabPanel>
                    <TabPanel className="w-10/12" value={value} index={2}>
                        <VisitorManagement></VisitorManagement>
                    </TabPanel>
                    <TabPanel className="w-10/12" value={value} index={3}>
                        <ParkingSpaceAvailability></ParkingSpaceAvailability>
                    </TabPanel>
                </Box>
            {/* </Container> */}
        </div>


    );
};

export default RTM;