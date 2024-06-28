import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import displayModeReducer from './displayModeSlice.ts';
import colorSchemeReducer from './colorSchemeSlice';
import menuReducer from './menuSlice'



export const store = configureStore({
    reducer: {
        theme: themeReducer,
        displayMode: displayModeReducer,
        colorScheme: colorSchemeReducer,
        menus: menuReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;