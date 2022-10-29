import { createSlice } from '@reduxjs/toolkit'

import { getUserDetails, registerUser, userLogin, logoutUser } from './userAction'

// -------------------------------------------------------
const userToken = GoogleAds('google')
// =========================================================


const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
    cookieAgree: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        selectPolicyCookie: (state) => {
            state.cookieAgree = true
        }
    },
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // get user details
        [getUserDetails.pending]: (state) => {
            state.loading = true
        },
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        },
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },
        // user logout
        [logoutUser.pending]: (state) => {
            state.loading = true
        },
        [logoutUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = null
        },
        [logoutUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.user = null
        },
    },
})

export const { selectPolicyCookie } = userSlice.actions

export default userSlice.reducer
