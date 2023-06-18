import { configureStore } from '@reduxjs/toolkit';
import combinedFormReducer from './features/combinedForm/combinedForm.slice';

export const store = configureStore({
  reducer: {
    combinedForm: combinedFormReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
