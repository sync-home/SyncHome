import { Backdrop, CircularProgress } from '@mui/material';

const Loader = ({ loaderOpen }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loaderOpen}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;