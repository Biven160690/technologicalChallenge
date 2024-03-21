import {
    Box,
    Button,
    Card,
    CardBody,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../services/todoSlice';
import { RootState } from '../../services/store';

const cardStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
};

export const Todo = () => {
    const { todos } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const addTodo = () => {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        if (!input.value) {
            return;
        }

        dispatch(add(input.value));
        input.value = '';
    };

    return (
        <Box w="500px">
            <InputGroup size="md" margin="0 0 25px 0">
                <Input pr="4.5rem" type="text" ref={inputRef} />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => addTodo()}>
                        Add
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Box>
                {todos.map((todo, index) => (
                    <Card
                        key={index}
                        size="md"
                        sx={cardStyles}
                        variant="outline"
                        boxShadow="lg"
                        borderRadius="md"
                        _notLast={{ marginBottom: '10px' }}
                    >
                        <CardBody>
                            <Text>{todo}</Text>
                        </CardBody>
                        <Button
                            colorScheme="red"
                            onClick={() => dispatch(remove(index))}
                        >
                            Delete
                        </Button>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};
