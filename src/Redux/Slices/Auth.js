import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {
              accoutType: "Admin",
          },
    authenticationToken: localStorage.getItem("authenticationToken")
        ? JSON.parse(localStorage.getItem("authenticationToken"))
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, value) => {
            state.user = value.payload;
        },
        setAuthenticationTokenn: (state, value) => {
            state.authenticationToken = value.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setAuthenticationTokenn } = authSlice.actions;

export default authSlice.reducer;
