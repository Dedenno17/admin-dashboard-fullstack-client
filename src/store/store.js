import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import themeReducer from './themeSlice';
import userIdReducer from './userSlice';
import { api } from './api';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    userId: userIdReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
