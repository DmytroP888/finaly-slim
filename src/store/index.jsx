import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userSlice'
import {
    userLogin,
    registerUser,
    authRefresh,
    logoutUser
} from './userAction'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store

export {
    userReducer,
    userLogin,
    registerUser,
    authRefresh,
    logoutUser
}