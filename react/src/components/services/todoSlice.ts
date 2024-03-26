import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

export interface AddTodoPayLoad {
    id: number;
    text: string;
}

export interface CompleteTodoPayLoad {
    id: number;
    isCompleted: boolean;
}

export interface InitialState {
    todos: Todo[];
}

const initialState: InitialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: ({ todos }, action: PayloadAction<AddTodoPayLoad>) => {
            const { id, text } = action.payload;
            todos.push({
                id,
                text,
                isCompleted: false,
            });
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload);
        },
        complete: (state, action: PayloadAction<CompleteTodoPayLoad>) => {
            const { id, isCompleted } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted };
                }

                return todo;
            });
        },
    },
});

export const { add, remove, complete } = todoSlice.actions;
export default todoSlice.reducer;
