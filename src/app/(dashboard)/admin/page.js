export const metadata = {
    title: 'Admin',
    description: 'This is admin panel',
}

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdminSidebar from "@/components/ui/AdminSidebar"

const drawerWidth = 240;
function AdminDashboard(props) {
    const { window } = props;
    console.log(props);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AdminSidebar window={window} />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Admin Dashboard Goes Here.
                </Typography>
            </Box>
        </Box>
    );
}

AdminDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default AdminDashboard;