import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import store from './index'

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue },) => {
        try {
            // configure header's Content-Type as JSON
            const config = { headers: { 'Content-Type': 'application/json' } }
            const { data } =
                await axios.post('https://slimmom-backend.goit.global/auth/login',
                    { email, password }, config
                )
            // store user's in session storage
            const cookieState = store.getState().user.cookieAgree
            if (cookieState) {
                // sessionStorage.setItem('todaySummary', JSON.stringify(data.todaySummary))
                // sessionStorage.setItem('userInfo', JSON.stringify(data.user))
                document.cookie = `google=${data.refreshToken}`
                document.cookie = `agree=${cookieState}`
            }
            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ email, password, username }, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } }
            await axios.post('https://slimmom-backend.goit.global/auth/register',
                { email, password, username }, config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const authRefresh = createAsyncThunk(
    'user/authRefresh',
    async ({ tokenRefSTOREofCookie, sidRefresh }, { rejectWithValue }) => {
        try {
            // configure authorization header with user's token
            const config = { headers: { Authorization: `Bearer ${tokenRefSTOREofCookie} ` } }
            const { data } =
                await axios.post(`https://slimmom-backend.goit.global/auth/refresh`, { "sid": sidRefresh }, config)
            document.cookie = `google=${data.newRefreshToken}`
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logout',
    async ({ }, { rejectWithValue }) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } }
            await axios.post(`https://slimmom-backend.goit.global/auth/logout`, {}, config)
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
