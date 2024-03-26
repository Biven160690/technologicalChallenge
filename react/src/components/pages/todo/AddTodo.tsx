import {
    Box,
    Button,
    Input,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../services/todoSlice';
import { useInterval } from '../../hook/useInterval';
import { motion } from 'framer-motion';

const addButtonStyles = {
    h: '1.75rem',
    size: 'sm',
    marginRight: '10px',
    transition: {
        ease: 'easeInOut',
    },
};

const stopButtonStyles = {
    h: '1.75rem',
    size: 'sm',
    padding: '0 20px',
    'min-width': 'auto'
};

const inputStyles = {
    pr: '4.5rem',
    type: 'text',
    marginRight: '10px',
};

const baseStyles = {
    w: '800px',
    margin: '0 0 25px 0',
};

const containerStyles = {
    margin: '0 0 25px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const AddTodo = () => {
    const [started, setStarted] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch();

    const { reset, clear } = useInterval(
        () => setStarted((prev) => !prev),
        1000
    );

    const addTodo = () => {
        const input = inputRef.current;

        if (!input || !input.value) {
            return;
        }

        const id = new Date().getTime();

        dispatch(add({ id, text: input.value }));
        input.value = '';
        reset();
    };

    return (
        <Box {...baseStyles}>
            <Box {...containerStyles}>
                <Input {...inputStyles} ref={inputRef} />
                <Button
                    as={motion.button}
                    {...addButtonStyles}
                    onClick={addTodo}
                    animate={{
                        color: started ? 'red' : 'white',
                    }}
                >
                    Add
                </Button>
                <Button {...stopButtonStyles} onClick={clear}>
                    Stop animation
                </Button>
            </Box>
        </Box>
    );
};
