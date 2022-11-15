import React from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logoutUser } from '../../store'
import {
    MainBlockFooter,
    SummaryBlockFooter,
    BlockTitleFoter,
    AuxiliaryBlock,
    NamedataBlock,
    DataBlock,
    NameDataLi,
    Notfoodblock,
    DataBlockNotfood,
    NavBlockUserFooter,
    NameMenuUser,
    ExitUserMenu,
    ImageLeaves,
    ImageLeavesTablet
} from './Footer.styled'
import {
    DesktopLeavesUserAvif,
    DesktopLeavesUserWebp,
    DesktopLeavesUserPng,
    FooterTabletLeavesAvif,
    FooterTabletLeavesWebp,
    FooterTabletLeavesPng
} from '../../assets/img'

const Footer = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.user)
    const userName = userInfo && userInfo.user.username
    const tokenACC = userInfo && userInfo.accessToken
    const logout = () => {
        dispatch(logoutUser(tokenACC))
        sessionStorage.clear()
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;max-age=" + 0 + ";path=/")
        })
        navigate('/')
    }

    return tokenACC &&
        !(location.pathname === '/login') &&
        !(location.pathname === '/auth') &&
        !(location.pathname === '/') &&
        (
            <>
                <MainBlockFooter>
                    <NavBlockUserFooter >
                        <NameMenuUser>
                            {userName}
                        </NameMenuUser>
                        <ExitUserMenu onClick={logout} >
                            Exit
                        </ExitUserMenu>
                    </NavBlockUserFooter>
                    <SummaryBlockFooter>
                        <BlockTitleFoter>Summary for 09/26/2022</BlockTitleFoter>
                        <AuxiliaryBlock>
                            <NamedataBlock>
                                <NameDataLi>Left</NameDataLi>
                                <NameDataLi>Consumed</NameDataLi>
                                <NameDataLi>Daily rate</NameDataLi>
                                <NameDataLi>n% of normal</NameDataLi>
                            </NamedataBlock>
                            <DataBlock>
                                <NameDataLi>000 kcal</NameDataLi>
                                <NameDataLi>000 kcal</NameDataLi>
                                <NameDataLi>000 kcal</NameDataLi>
                                <NameDataLi>000 kcal</NameDataLi>
                            </DataBlock>
                        </AuxiliaryBlock>
                    </SummaryBlockFooter>
                    <Notfoodblock>
                        <BlockTitleFoter>Food not recommended</BlockTitleFoter>
                        <DataBlockNotfood>
                            Your diet will be displayed here
                        </DataBlockNotfood>
                    </Notfoodblock>
                    <picture>
                        <source srcSet={DesktopLeavesUserWebp} type="image/webp" />
                        <source srcSet={DesktopLeavesUserAvif} type="image/avif" />
                        <ImageLeaves src={DesktopLeavesUserPng} alt="Image leaves" />
                    </picture>
                    <picture>
                        <source srcSet={FooterTabletLeavesWebp} type="image/webp" />
                        <source srcSet={FooterTabletLeavesAvif} type="image/avif" />
                        <ImageLeavesTablet src={FooterTabletLeavesPng} alt="Image leaves" />
                    </picture>
                </MainBlockFooter>
            </>
        )
}

export default Footer