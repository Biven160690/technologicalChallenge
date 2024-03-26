import React from 'react';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';
import { Box } from '@chakra-ui/react';

export const Todo = () => {
    return (
        <Box>
            <AddTodo />
            <Todos />
        </Box>
    );
};
