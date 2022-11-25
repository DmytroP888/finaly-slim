import React, { useState } from "react"

import {
    BlockPolicy,
    ClickPolicy,
    СrossСlosure,
    TextPolicy,
    LawsPolicy,
    LawsPolicyList
} from './Cookie.styled'

const PolicyCookie = () => {
    const [policyOpened, setPolicyOpened] = useState(false)
    const togglePolicy = () => { setPolicyOpened(!policyOpened) }
    return (<>
        {policyOpened ?
            <>
                <BlockPolicy>
                    <СrossСlosure onClick={togglePolicy}>&times;</СrossСlosure>
                    <TextPolicy>
                        Currently, this site generates cookies to facilitate authorization (your email address and a special access token) and to speed up the site (some of the information you provide on the site).
                        If you accept cookies, they will be stored on your device during the entire session of use (the period of your stay on the site with successful authorization).
                        You can delete cookies on your device by clearing your browser - clear cache, clear cookies.
                        Disabling cookies on the Slim Mom website in this variation is not required, as you confirm or disable cookies with each authorization. Cookies are deleted after you log out of your account.
                        If cookies are used by analytics applications or advertising companies on our site in the future, you will be notified.
                        Basic Laws:
                    </TextPolicy>
                    <LawsPolicy>
                        <LawsPolicyList>Europe - GDPR</LawsPolicyList>
                        <LawsPolicyList>USA - COPPA</LawsPolicyList>
                        <LawsPolicyList>California  - CCPA</LawsPolicyList>
                        <LawsPolicyList>France - CNIL</LawsPolicyList>
                        <LawsPolicyList>Italy - DPA</LawsPolicyList>
                        <LawsPolicyList>UK - PECR</LawsPolicyList>
                        <LawsPolicyList>Brazil - LGPD</LawsPolicyList>
                        <LawsPolicyList>Canada - PIPEDA</LawsPolicyList>
                        <LawsPolicyList>China - PIPL</LawsPolicyList>
                        <LawsPolicyList>Singapore - PDPA</LawsPolicyList>
                        <LawsPolicyList>Japan - APPI</LawsPolicyList>
                    </LawsPolicy>
                </BlockPolicy>
            </>
            :
            <ClickPolicy onClick={togglePolicy} >
                Our privacy policy
            </ClickPolicy>
        }
    </>)
}

export default PolicyCookie