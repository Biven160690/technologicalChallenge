import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { remove, add } from './todoSlice';
import { RootState, AppDispatch } from './store';
import type { TypedStartListening } from '@reduxjs/toolkit';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const localStorageMiddleware = createListenerMiddleware();

(localStorageMiddleware.startListening as AppStartListening)({
    matcher: isAnyOf(add, remove),
    effect: (_, listenerApi) =>
        localStorage.setItem(
            `${process.env.REACT_APP_LOCAL_STORAGE_KEY}`,
            JSON.stringify(listenerApi.getState().todos.todos)
        ),
});
