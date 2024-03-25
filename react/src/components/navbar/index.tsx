import { Box, Flex, HStack, Link as CustomLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const linksSettings = [
    { name: 'To-dos', path: '/to-dos' },
    { name: 'Users', path: '/users' },
];

const baseStyles = {
    position: 'sticky',
    top: '0px',
    height: '70px',
    backgroundColor: 'blue',
    zIndex: '5',
    width: '100%',
};

const hoverStyles = {
    textDecoration: 'none',
    bg: 'gray.200',
    transitionDuration: '.5s',
};

const activeStyles = {
    textDecoration: 'none',
    bg: 'red.200',
    color: 'red.200',
};

export const Navbar = () => {
    return (
        <Box px={4} sx={baseStyles}>
            <Flex
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="flex-end"
            >
                <HStack as="nav" spacing={6}>
                    {linksSettings.map(({ name, path }, index) => (
                        <CustomLink
                            key={index}
                            as={NavLink}
                            to={path}
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={hoverStyles}
                            _activeLink={activeStyles}
                        >
                            {name}
                        </CustomLink>
                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};
