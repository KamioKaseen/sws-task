import { configureStore } from '@reduxjs/toolkit';
import { outlayRowsApi } from '../api/outlayRowsApi';

export const store = configureStore({
  reducer: {
    [outlayRowsApi.reducerPath]: outlayRowsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayRowsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
