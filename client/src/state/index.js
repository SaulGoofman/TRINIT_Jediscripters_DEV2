import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_type: null,
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.user_type = action.payload.user_type;
          },
          setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.user_type = null;
          },
    }
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;