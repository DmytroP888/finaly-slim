import React, { useEffect, useMemo } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser, authRefresh } from '../store'
import { userToken } from '../store/userSlice'


let tokenACC = null
let tokenACC_exp = null
// let tokenREF = null
let tokenRefSTOREofCookie = null
let tokenACC_iat = null
let tokenRef_iat = null
// let sid_state = null


const NewTokensStore = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.user)
    // const tokenACC = userInfo && userInfo.accessToken
    // const tokenACC_exp = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).exp) * 1000
    // const tokenREF = userInfo && userInfo.refreshToken
    // const tokenRefSTOREofCookie = tokenREF ? tokenREF : userToken
    // const tokenACC_iat = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).iat) * 1000
    // const tokenRef_iat = tokenACC && ((JSON.parse(atob(tokenRefSTOREofCookie.split(".")[1]))).iat) * 1000

    //    )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
    tokenACC = userInfo && userInfo.accessToken
    tokenACC_exp = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).exp) * 1000
    const tokenREF = userInfo && userInfo.refreshToken
    tokenRefSTOREofCookie = tokenREF ? tokenREF : userToken
    tokenACC_iat = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).iat) * 1000
    tokenRef_iat = tokenACC && ((JSON.parse(atob(tokenRefSTOREofCookie.split(".")[1]))).iat) * 1000
    // sid_state = userInfo && userInfo.sid

    const userObject = useMemo(() => {
        return tokenREF
    }, [tokenREF]);

    //    )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

    useEffect(() => {

        // const { userInfo } = useSelector((state) => state.user)
        // const tokenACC = userInfo && userInfo.accessToken
        // const tokenREF = userInfo && userInfo.refreshToken
        // const tokenRefSTOREofCookie = tokenREF ? tokenREF : userToken
        // const tokenACC_exp = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).exp) * 1000
        // const tokenACC_iat = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).iat) * 1000
        // const tokenRef_iat = tokenACC && ((JSON.parse(atob(tokenRefSTOREofCookie.split(".")[1]))).iat) * 1000
        if (tokenREF && tokenACC && (tokenACC_exp < Date.now() || tokenACC_iat !== tokenRef_iat)) {
            dispatch(logoutUser({}))
        }
    }, [tokenREF, dispatch, userObject])

    useEffect(() => {
        // const { userInfo } = useSelector((state) => state.user)
        const tokenREF = userInfo && userInfo.refreshToken

        const tokenACC = userInfo && userInfo.accessToken
        const tokenACC_exp = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).exp) * 1000
        const tokenRefSTOREorCookie = tokenREF ? tokenREF : userToken

        const sid_state = userInfo && userInfo.sid
        const sidRefresh = sid_state

            ? sid_state
            : userToken && (JSON.parse(atob(userToken.split(".")[1]))).sid
        const minutExpire = 59 // minutes before token expiration
        // determine the time 5 minutes before the end of the life of the Access Token
        const tokenACC_exp_Reboot = tokenACC && (tokenACC_exp - (minutExpire * 60 * 1000))

        console.log("sidRefresh", sidRefresh)
        if (tokenACC && (tokenACC_exp_Reboot < Date.now())) {
            dispatch(authRefresh({ tokenRefSTOREorCookie, sidRefresh }))
        }
    }, [navigate, dispatch, userInfo])
    return (<></>)
}

export default NewTokensStore