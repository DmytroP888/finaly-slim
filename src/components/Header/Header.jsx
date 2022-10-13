import React from "react"
import { useSelector } from "react-redux"

import HeaderAuth from "./HeaderAuth"
import HeaderUser from './HeaderUser'

const Header = () => {
    const { userInfo } = useSelector((state) => state.user)
    return (
        <>
            {userInfo ? <HeaderUser /> : <HeaderAuth />}
        </>
    )
}

export default Header