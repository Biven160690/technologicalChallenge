import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const linksSettings = [
    { name: 'To-dos', path: '/to-dos' },
    { name: 'Users', path: '/users' },
];

const baseStyles = {
    position: 'sticky',
    top: '0px',
    height: '70px',
    backgroundColor: 'navbar.color',
    zIndex: '5',
    width: '100%',
    px: '4'
};

const flexContainerStyles = {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
};

const linkStyles = {
    px: 2,
    py: 1,
    rounded: 'md',
    _activeLink: {
        textDecoration: 'none',
        bg: '#020070',
        color: '#bc3636',
    },
};

export const Navbar = () => {
    return (
        <Box sx={baseStyles}>
            <Flex {...flexContainerStyles}>
                <HStack as="nav" spacing={6}>
                    {linksSettings.map(({ name, path }, index) => (
                        <Link
                            {...linkStyles}
                            key={index}
                            as={NavLink}
                            to={path}
                        >
                            {name}
                        </Link>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};
