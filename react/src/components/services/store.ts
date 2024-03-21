import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { localStorageMiddleware } from './middleware';
import { loadLocalStorageData } from './helpers';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
    preloadedState: {
        todos: { todos: loadLocalStorageData() },
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
