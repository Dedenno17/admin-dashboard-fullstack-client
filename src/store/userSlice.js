import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '63701cc1f03239b7f700000e',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
