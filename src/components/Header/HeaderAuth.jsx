import React from "react"
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'
import {
    DesktopWidth,
    Hideondesktop,
    TabletWidth,
    MobileWidth,
    Header,
    Logo,
    LogoTablet,
    LogoMobile,
    NavBlock,
    LinkMenu
} from './Header.styled'
import LogoSVG from '../../assets/svg/logo.svg'
import LogoTabletSVG from '../../assets/svg/logo-tablet.svg'
import LogoMobileSVG from '../../assets/svg/logo-mobile-guest.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }

const HeaderAuth = () => {
    const location = useLocation()
    const { userInfo, userToken } = useSelector((state) => state.user)
    const tokenACC = userInfo && userInfo.accessToken

    // let testACCstoreTOKENlet_1 = userInfo.accessToken
    // console.log("^^^testACCstoreTOKENlet_1", testACCstoreTOKENlet_1)
    // let testACCstoreTOKENconst_1 = userInfo.accessToken
    // console.log("^^^testACCstoreTOKENconst_1", testACCstoreTOKENconst_1)

    // let testACCstoreTOKENlet_2 = userInfo && userInfo.accessToken
    // console.log("^^^testACCstoreTOKENlet_2", testACCstoreTOKENlet_2)
    // let testACCstoreTOKENconst_2 = userInfo && userInfo.accessToken
    // console.log("^^^testACCstoreTOKENconst_2", testACCstoreTOKENconst_2)

    // if (tokenACC) {
    //     console.log("HeaderAuth--ACC--tokenACCstore", tokenACC)
    // }
    // else {
    //     console.log("HeaderAuth--==--TokenREFcookie", userToken)
    // }
    !tokenACC && console.log("HeaderAuth--==--TokenREFcookie", userToken)


    const navMenu = (
        <NavBlock>
            <LinkMenu>
                <NavLink to="/login" style={linkActiveColor} >
                    Sign in
                </NavLink>
            </LinkMenu>
            <LinkMenu>
                <NavLink to="/auth" style={linkActiveColor} >
                    Registration
                </NavLink>
            </LinkMenu>
        </NavBlock>
    )

    return (
        <>
            {!tokenACC &&
                <Header>
                    <NavLink to="/" >
                        <DesktopWidth>
                            <Logo src={LogoSVG} alt="Logo header" />
                        </DesktopWidth>
                        <TabletWidth>
                            <LogoTablet src={LogoTabletSVG} alt="Logo header" />
                        </TabletWidth>
                        <MobileWidth>
                            <LogoMobile src={LogoMobileSVG} alt="Logo header" />
                        </MobileWidth>
                    </NavLink>
                    {(location.pathname !== '/auth') && (location.pathname !== '/login') ?
                        <div>{navMenu}</div> :
                        <Hideondesktop>{navMenu}</Hideondesktop>
                    }
                </Header>
            }
        </>
    )
}

export default HeaderAuth