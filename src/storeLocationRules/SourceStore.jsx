import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import PolicyCookie from './PolicyCookie'
import { selectPolicyCookie } from '../store/userSlice'
import {
    BlurredBackground,
    BlockModal,
    BlockButton,
    RefuseButton,
    AgreeButton
} from './SourceStore.styled'

const SourceStore = () => {

    const dispatch = useDispatch()
    const [condition, setCondition] = useState(false)
    const closeCondition = () => { setCondition(!condition) }
    const agreeCookie = () => {
        dispatch(selectPolicyCookie())
        setCondition(!condition)
    }

    // ----------------------------------------------------------
    const { loading, userInfo, cookieAgree, error } = useSelector((state) => state.user)

    // initialize userToken and cookie from cookie
    const GoogleAds = (name) => {
        const t = document.cookie.match("\\b" + name + "=([^;]*)\\b")
        return t ? t[1] : null
    }
    const userToken = GoogleAds('google')
    const cookieAg = GoogleAds('agree')
    // ----------------------------------------------------------



    // ----------------------------------------------------------



    // ----------------------------------------------------------

    return !condition && (<>
        <BlurredBackground>
            <BlockModal>
                This site uses cookies and related technologies,
                for purposes that may include site performance, analytics,
                improved user experience, or advertising.
                You can choose to consent to our use of these technologies or opt-out of them.
                <PolicyCookie />
                <BlockButton>
                    <RefuseButton onClick={closeCondition}>refusal</RefuseButton>
                    <AgreeButton onClick={agreeCookie}>AGREE & PROCEED</AgreeButton>
                </BlockButton>
            </BlockModal>
        </BlurredBackground>
    </>)
}

export default SourceStore