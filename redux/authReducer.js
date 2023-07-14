import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
}
export const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearMessage: (state) => {
            state.message = null;
        },
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        loadUserFailure: (state , action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logoutRequest: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        logoutFailure: (state , action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        verificationRequest: (state) => {
            state.loading = true;
        },
        verificationSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        },
        verificationFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
        forgetPasswordRequest: (state) => {
        state.loading = true;
        },
        updatePasswordRequest: (state) => {
            state.loading = true;
        },
        updatePasswordSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updatePasswordFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        forgetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        },
        updateProfileRequest: (state) => {
            state.loading = true;
        },
        updateProfileSuccess: (state , action) => {
            state.loading = false;
            state.message = action.payload;
        },
        updateProfileFailure: (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        forgetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
        resetPasswordRequest: (state) => {
        state.loading = true;
        },
        resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        },
        resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
}
})



export const { 
    loginRequest,
    loginSuccess,
    loginFailure,
    loadUserRequest,
    loadUserFailure,
    loadUserSuccess,
    clearError,
    clearMessage,
    logoutFailure,
    logoutRequest,
    logoutSuccess,
    registerFailure,
    registerRequest,
    registerSuccess,
    verificationRequest,
    verificationFailure,
    verificationSuccess,
    updatePasswordFailure,
    updatePasswordRequest,
    updatePasswordSuccess,
    updateProfileFailure,
    updateProfileRequest,
    updateProfileSuccess } = authSlice.actions;
export default authSlice.reducer;