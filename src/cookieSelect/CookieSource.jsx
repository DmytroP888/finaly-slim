import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import PolicyCookie from './PolicyCookie'
import { selectPolicyCookie } from '../store/userSlice'
import {
    BlurredBackground,
    BlockModal,
    BlockButton,
    RefuseButton,
    AgreeButton
} from './Cookie.styled'

const CookieSource = () => {
    const dispatch = useDispatch()
    const [condition, setCondition] = useState(false)
    const closeCondition = () => { setCondition(!condition) }
    const agreeCookie = () => {
        dispatch(selectPolicyCookie())
        setCondition(!condition)
    }

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

export default CookieSource