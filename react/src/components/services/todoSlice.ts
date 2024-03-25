import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
    todos: string[];
}

const initialState: InitialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: ({ todos }, action: PayloadAction<string>) => {
            todos.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
    },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
