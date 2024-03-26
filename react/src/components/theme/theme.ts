import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Link: {
            baseStyle: {
                color: '#000000',
                _hover: {
                    textDecoration: 'none',
                    color: '#00DDFF',
                    bg: '#2b28eb',
                },
            },
        },
    },
    colors: {
        navbar: {
            color: '#00DDFF',
        },
    },
});

export default theme;
