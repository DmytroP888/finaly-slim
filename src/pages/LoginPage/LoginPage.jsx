import React from "react"
import { NavLink } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'
import {
    Logo,
    DesktopWidth,
    TabletWidth,
    ContainerRelative,
    FigureBackgroundPNG,
    LoginAuthTabletLeaves,
    LoginAuthTabletStrawb,
    LoginAuthTabletBanana,
    Screensaver
} from './LoginPage.styled'
import {
    FigureBackgroundAvif,
    FigureBackgroundWebp,
    FigureBackgroundPng,
    FigureBackTabletAvif,
    FigureBackTabletWebp,
    FigureBackTabletPng,
    MainPageImgAvif,
    MainPageImgWebp,
    MainPageImgPng,
    MainpageTabletBananaAvif,
    MainpageTabletBananaWebp,
    MainpageTabletBananaPng,
    LogAuthTabletLeavesAvif,
    LogAuthTabletLeavesWebp,
    LogAuthTabletLeavesPng,
    StrawberryLoginTabletAvif,
    StrawberryLoginTabletWebp,
    StrawberryLoginTabletPng
} from '../../assets/img'

import LogoSVG from '../../assets/svg/logo.svg'

const LoginPage = () => {
    return (
        <>
            <LoginForm />
            <DesktopWidth>
                <NavLink to="/">
                    <Logo src={LogoSVG} alt="Logo header" />
                </NavLink>
                <picture>
                    <source srcSet={FigureBackgroundWebp} type="image/webp" />
                    <source srcSet={FigureBackgroundAvif} type="image/avif" />
                    <FigureBackgroundPNG src={FigureBackgroundPng} alt="Background figure" />
                </picture>
                <picture>
                    <source srcSet={MainPageImgAvif} type="image/webp" />
                    <source srcSet={MainPageImgWebp} type="image/avif" />
                    <Screensaver src={MainPageImgPng} alt="Screensaver picture" />
                </picture>
            </DesktopWidth>
            <TabletWidth>
                <ContainerRelative>
                    <picture>
                        <source srcSet={FigureBackTabletWebp} type="image/webp" />
                        <source srcSet={FigureBackTabletAvif} type="image/avif" />
                        <FigureBackgroundPNG src={FigureBackTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={LogAuthTabletLeavesWebp} type="image/webp" />
                        <source srcSet={LogAuthTabletLeavesAvif} type="image/avif" />
                        <LoginAuthTabletLeaves src={LogAuthTabletLeavesPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={StrawberryLoginTabletWebp} type="image/webp" />
                        <source srcSet={StrawberryLoginTabletAvif} type="image/avif" />
                        <LoginAuthTabletStrawb src={StrawberryLoginTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={MainpageTabletBananaWebp} type="image/webp" />
                        <source srcSet={MainpageTabletBananaAvif} type="image/avif" />
                        <LoginAuthTabletBanana src={MainpageTabletBananaPng} alt="Background figure" />
                    </picture>
                </ContainerRelative>
            </TabletWidth>
        </>
    )
}

export default LoginPage