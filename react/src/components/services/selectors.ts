import { createSelector } from 'reselect';
import { RootState } from './store';

export const memoizedSelectCompletedTodos = createSelector(
    [(state: RootState) => state.todo.todos],
    (todos) => ({
        completed: todos.filter((todo) => todo.isCompleted),
        active: todos.filter((todo) => !todo.isCompleted),
    })
);
