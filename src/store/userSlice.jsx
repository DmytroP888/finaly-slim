import { createSlice } from '@reduxjs/toolkit'

import { authRefresh, registerUser, userLogin, logoutUser } from './userAction'

// initialize refreshToken from Cookie
const cookieParse = (name) => {
    const c = document.cookie.match("\\b" + name + "=([^;]*)\\b")
    return c ? c[1] : null
}
export const userToken = cookieParse('google')
    ? cookieParse('google')
    : null

console.log("userSlice--userToken", userToken)

const initialState = {
    loading: false,
    loadingLogout: false,
    userInfo: null,
    userToken,
    genuineToken: null,
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
            state.genuineToken = true
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
        // get user auth
        [authRefresh.pending]: (state) => {
            state.loading = true
        },
        [authRefresh.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo.accessToken = payload.newAccessToken
            state.userInfo.refreshToken = payload.newRefreshToken
            state.userInfo.sid = payload.sid
        },
        [authRefresh.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // user logout
        [logoutUser.pending]: (state) => {
            state.loadingLogout = true
        },
        [logoutUser.fulfilled]: (state) => {
            state.loadingLogout = false
            state.userInfo = null
        },
        [logoutUser.rejected]: (state) => {
            state.loadingLogout = false
            state.userInfo = null
            state.userToken = null
            state.error = null
            state.user = null
            state.cookieAgree = null
            state.genuineToken = null
        }
    }
})

export const { selectPolicyCookie } = userSlice.actions

export default userSlice.reducer
