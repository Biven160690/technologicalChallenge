import { Box, Button, Card, CardBody, Checkbox, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../../services/todoSlice';
import { memoizedSelectCompletedTodos } from '../../services/selectors';

const cardStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    size: 'md',
    variant: 'outline',
    boxShadow: 'lg',
    borderRadius: 'md',
    _notLast: { marginBottom: '10px' },
};

export const Todos = () => {
    const { completed, active } = useSelector(memoizedSelectCompletedTodos);
    const dispatch = useDispatch();

    return (
        <Box display="flex" w="100%">
            <Box flex="1 1 100%" marginRight="10px">
                {active.map((todo, index) => (
                    <Card key={index} sx={cardStyles}>
                        <CardBody>
                            <Text
                                textDecoration={
                                    todo.isCompleted ? 'line-through' : 'none'
                                }
                            >
                                {todo.text}
                            </Text>
                        </CardBody>
                        <Button
                            colorScheme="red"
                            marginRight="10px"
                            onClick={() => dispatch(remove(todo.id))}
                        >
                            Delete
                        </Button>
                        <Checkbox
                            colorScheme="red"
                            isChecked={todo.isCompleted}
                            onChange={() =>
                                dispatch(
                                    complete({
                                        id: todo.id,
                                        isCompleted: !todo.isCompleted,
                                    })
                                )
                            }
                        >
                            isComplete
                        </Checkbox>
                    </Card>
                ))}
            </Box>
            <Box flex={completed.length > 0 ? '1 1 100%' : '1 1 auto'}>
                {completed.map((todo, index) => (
                    <Card key={index} sx={cardStyles}>
                        <CardBody>
                            <Text textDecoration={'line-through'}>
                                {todo.text}
                            </Text>
                        </CardBody>
                        <Button
                            colorScheme="red"
                            marginRight="10px"
                            onClick={() => dispatch(remove(todo.id))}
                        >
                            Delete
                        </Button>
                        <Checkbox
                            colorScheme="red"
                            isChecked={todo.isCompleted}
                            onChange={() =>
                                dispatch(
                                    complete({
                                        id: todo.id,
                                        isCompleted: !todo.isCompleted,
                                    })
                                )
                            }
                        >
                            isComplete
                        </Checkbox>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};
