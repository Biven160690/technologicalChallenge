import { Box } from '@chakra-ui/react';
import { Navbar } from '../navbar';
import { Outlet } from 'react-router';

const baseStyles = {
    backgroundColor: 'rgb(196, 196, 196)',
    height: '100vh',
    overflow: 'auto',
};

const mainStyles = {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const Layout = () => {
    return (
        <Box sx={baseStyles}>
            <Navbar />
            <Box sx={mainStyles} as='main'>
                <Outlet />
            </Box>
        </Box>
    );
};
