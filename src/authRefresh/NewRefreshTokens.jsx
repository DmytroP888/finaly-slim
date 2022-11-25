import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser, authRefresh } from '../store'
import { userToken } from '../store/userSlice'



const NewRefreshTokens = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo, error, loadingLogout, loading } = useSelector((state) => state.user)

    // useEffect(() => {
    //     // const { userInfo } = useSelector((state) => state.user)
    //     // const tokenACC = userInfo && userInfo.accessToken
    //     // const tokenREF = userInfo && userInfo.refreshToken
    //     // const tokenRefSTOREofCookie = tokenREF ? tokenREF : userToken
    //     // const tokenACC_exp = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).exp) * 1000
    //     // const tokenACC_iat = tokenACC && ((JSON.parse(atob(tokenACC.split(".")[1]))).iat) * 1000
    //     // const tokenRef_iat = tokenACC && ((JSON.parse(atob(tokenRefSTOREofCookie.split(".")[1]))).iat) * 1000
    //     if (tokenREF && tokenACC && (tokenACC_exp < Date.now() || tokenACC_iat !== tokenRef_iat)) {
    //         dispatch(logoutUser({}))
    //     }
    // }, [tokenREF, dispatch])

    useEffect(() => {
        if (error) {
            dispatch(logoutUser({}))
            localStorage.clear()
            sessionStorage.clear()
            document.cookie.split(";").forEach((c) => {
                document.cookie = c
                    .replace(/^ +/, "")
                    .replace(/=.*/, "=;max-age=" + 0 + ";path=/")
            })
            // navigate('/')
        }
    }, [error])

    // const errorUnauth = error

    // loadingLogout && (error === 'Unauthorized' || 'No token provided' || 'Invalid session') ?  : null

    // if (loadingLogout && (error === 'Unauthorized' || 'No token provided' || 'Invalid session')) {
    //     alert(error)
    // }

    loadingLogout && error && alert(error)

    useEffect(() => {
        // const { userInfo } = useSelector((state) => state.user)
        const tokenREF = userInfo && userInfo.refreshToken
        const tokenACC = userInfo && userInfo.accessToken
        // const errorAuth = error && error
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
        console.log("tokenRefSTOREorCookie", tokenRefSTOREorCookie)
        if (tokenACC && (tokenACC_exp_Reboot < Date.now())) {
            dispatch(authRefresh({ tokenRefSTOREorCookie, sidRefresh }))
        }
        // error && error_authRefresh()
    }, [navigate])

    // error ? alert(error) : null
    // const error_authRefresh = () => {
    // if (error) {
    // alert(error)
    // dispatch(logoutUser({}))
    // }
    // }




    return (<></>)
}

export default NewRefreshTokens