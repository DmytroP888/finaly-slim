import React, { useState } from "react"
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser } from '../../store'
import NewRefreshTokens from '../../authRefresh'
import { WHITE, GRAY_BLUE, GRAY_DARK } from '../../assets/themes/colors'
import {
    DesktopWidth,
    TabletWidtUser,
    Hideondesktop,
    MobileWidth,
    Header,
    Logo,
    LogoTablet,
    ExitArrow,
    NavBlock,
    LinkMenu,
    WindowMenuTabletMobile,
    BlockMenuTabletMobile,
    NavBlockUser,
    NameMenuUser,
    ExitUserMenu,
    BoxMenurightAlignment,
    MobileHamburgerBox,
    MobileHamburgerline,
    СrossСlosureMenu,
    HidingBlock
} from './Header.styled'
import LogoSVG from '../../assets/svg/logo.svg'
import LogoTabletSVG from '../../assets/svg/logo-tablet.svg'
import ExitArrowModal from '../../assets/svg/modal-exit-arrow.svg'

const linkActiveColor = ({ isActive }) => { return { color: isActive ? GRAY_DARK : GRAY_BLUE } }
const linkActiveColorTabletMobile = ({ isActive }) => { return { color: isActive ? WHITE : GRAY_BLUE } }

const HeaderUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => { setMenuOpened(!menuOpened) }
    const closeMenuWindow = () => { setMenuOpened(false) }
    const { userInfo, genuineToken } = useSelector((state) => state.user)
    const userName = userInfo && userInfo.user.username
    const logout = () => {
        dispatch(logoutUser({}))
        localStorage.clear()
        sessionStorage.clear()
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;max-age=" + 0 + ";path=/")
        })
        navigate('/')
    }

    return (
        <>
            {genuineToken &&
                <>
                    <NewRefreshTokens />
                    <Header>
                        <NavLink to="/calculator">
                            <DesktopWidth>
                                <Logo src={LogoSVG} alt="Logo header" />
                            </DesktopWidth>
                            <TabletWidtUser>
                                <LogoTablet src={LogoTabletSVG} alt="Logo header" onClick={closeMenuWindow} />
                            </TabletWidtUser>
                        </NavLink>
                        <DesktopWidth>
                            <NavBlock>
                                <LinkMenu>
                                    <NavLink to="/diary" style={linkActiveColor} >
                                        Diary
                                    </NavLink>
                                </LinkMenu>
                                <LinkMenu>
                                    <NavLink to="/calculator" style={linkActiveColor} >
                                        Calculator
                                    </NavLink>
                                </LinkMenu>
                            </NavBlock>
                        </DesktopWidth>
                        <BoxMenurightAlignment>
                            <TabletWidtUser>
                                {location.pathname === '/diary' &&
                                    <NavLink to="calculator" >
                                        <ExitArrow src={ExitArrowModal} alt='Return to the previous page' Active={menuOpened} />
                                    </NavLink>
                                }
                                <HidingBlock Active={menuOpened}>
                                    <NavBlockUser >
                                        <NameMenuUser>
                                            {userName}
                                        </NameMenuUser>
                                        <ExitUserMenu onClick={logout}>
                                            Exit
                                        </ExitUserMenu>
                                    </NavBlockUser>
                                </HidingBlock>
                            </TabletWidtUser>
                            <Hideondesktop>
                                <MobileHamburgerBox onClick={toggleMenu}>
                                    <MobileHamburgerline />
                                </MobileHamburgerBox>
                            </Hideondesktop>
                            <MobileWidth>
                                <MobileHamburgerBox Active={menuOpened} onClick={toggleMenu}>
                                    <MobileHamburgerline />
                                </MobileHamburgerBox>
                                <СrossСlosureMenu Active={menuOpened} onClick={toggleMenu}>&times;</СrossСlosureMenu>
                            </MobileWidth>
                        </BoxMenurightAlignment>
                    </Header>
                    <TabletWidtUser>
                        <WindowMenuTabletMobile Active={menuOpened} >
                            <BlockMenuTabletMobile>
                                <NavLink to="/diary" style={linkActiveColorTabletMobile} onClick={toggleMenu}>
                                    DIARY
                                </NavLink>
                                <NavLink to="/calculator" style={linkActiveColorTabletMobile} onClick={toggleMenu}>
                                    CALCULATOR
                                </NavLink>
                            </BlockMenuTabletMobile>
                        </WindowMenuTabletMobile>
                    </TabletWidtUser>
                </>
            }
        </>
    )
}

export default HeaderUser