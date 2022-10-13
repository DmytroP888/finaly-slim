import styled from "styled-components"

import {
    WHITE,
    GRAY_LIGHT,
    GRAY_DARK,
    GRAY_BLUE,
    GRAY_WHITE,
    CYAN_DARK
} from "../../assets/themes/colors"

export const Header = styled.header` 
    display: flex;
    position: absolute;
    z-index: 5;
    @media (max-width: 1000px){
       width: 100%;
       height: 80px;
       padding: 16px 32px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       position: fixed;
       border-bottom: 2px solid ${GRAY_LIGHT};
       background: ${WHITE};
    }
    @media (max-width: 600px){
        padding: 16px 20px;
        z-index: 7;
    }
    @media (max-width: 340px){
        padding: 16px 15px;
        min-width: 273px;
    }
`;

export const Logo = styled.img` 
    width: 167px;
    height: 66px;
    margin-left: 16px;
    margin-top: 80px;
`;

export const LogoTablet = styled.img` 
    width: 162px;
    height: 44px;
`;

export const LogoMobile = styled.img` 
    width: 43px;
    height: 44px;
`;

export const ExitArrow = styled.img`
    position: absolute;
    left: 20px;
    top: 93px;
    z-index: 7;
    @media (min-width: 600px){
        display:none;
    } 
        ${({ Active }) => !Active ?
        `display: visible;` :
        `display: none;`
    }
`;

export const NavBlock = styled.nav` 
    height: 32px;
    margin-left: 20px;
    margin-top: 121px;
    border-left: 2px solid ${GRAY_LIGHT};
    display: flex;
    align-items: center;
    @media (max-width: 1000px){
       margin:0px;
       border-left: none;
    }
`;

export const LinkMenu = styled.li` 
    font-family: "GothamPro-700";
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    list-style: none;
    margin-left: 20px;
    display: inline;
    @media (max-width: 345px){
        margin-left: 10px;
     }
`;

export const WindowMenuTabletMobile = styled.div` 
    background: ${CYAN_DARK};
    width: 100%;
    min-height: 100vh;
    position: absolute;
    z-index: 4;
    ${({ Active }) => Active ?
        `display: visible;` :
        `display: none;`
    }
`;

export const BlockMenuTabletMobile = styled.nav` 
    position: absolute;
    width: min-content;;
    height: 81px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Verdana-700';
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    @media (max-width: 600px){
        top: 140px;
        width: 280px;
        height: 65px;
        font-size: 18px;
        line-height: 22px;
    }
`;

// ---------------- Width --------------------- 
export const DesktopWidth = styled.div`
    @media only screen and (max-width: 1000px){
        display: none;
    }
`;

export const Hideondesktop = styled.div`
    @media only screen and (min-width: 1000px){
        display: none;
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const TabletWidth = styled.div`
    @media only screen and (min-width: 1000px){
        display: none;
    }
    @media only screen and (max-width: 600px){
        display: none;
    }
`;

export const TabletWidtUser = styled.div`
    @media only screen and (min-width: 1000px){
        display: none;
    }
`;

export const MobileWidth = styled.div`
    @media only screen and (min-width: 600px){
        display: none;
    }
`;

// ---------------------------------------------
export const NavBlockUser = styled.nav` 
     @media (max-width: 1000px){
        height: 32px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        margin:0px;
            font-family: "GothamPro-700";
        font-size: 14px;
        line-height: 13px;
        letter-spacing: 0.04em;
    }
    @media only screen and (max-width: 600px){
        height: 40px;
        width: 100%;
        background-color: ${GRAY_WHITE};
        top: 79px;
        right: 0px;
        position: absolute;
        display: flex;
        justify-content: flex-end;
    }
`;

export const HidingBlock = styled.div` 
@media only screen and (max-width: 600px){    
${({ Active }) => !Active ?
        `display: visible;` :
        `display: none;`
    }}
`;

export const NameMenuUser = styled.div` 
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130px;
    color: ${GRAY_DARK};
    text-align: right;
    padding-right: 15px;
`;

export const ExitUserMenu = styled.nav` 
    height: 32px;
    border-left: 2px solid ${GRAY_LIGHT};
    color: ${GRAY_BLUE};
    text-align: left;
    padding-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media only screen and (max-width: 600px){
        margin-right: 20px;
    }
`;
// ----------------------------------------------
export const BoxMenurightAlignment = styled.div`
    display: flex;
    align-items: center;
`;

export const MobileHamburgerBox = styled.nav`
    position: relative;
    width: 22px;
    height: 14px;
    border-top: 2px solid ${GRAY_DARK};
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${GRAY_DARK};
    justify-content: center;
    cursor: pointer;
    margin-left: 50px;
    ${({ Active }) => !Active ?
        `display: visible;` :
        `display: none;`
    }
`;

export const MobileHamburgerline = styled.div`
    width: 22px;
    border-top: 2px solid ${GRAY_DARK};
`;

export const СrossСlosureMenu = styled.div`
    font-weight: bold;
    font-size: 36px;
    float: right;
    cursor: pointer;
    margin-bottom: 3px;
    @media (min-width: 600px){
        display: none;
    }
    ${({ Active }) => Active ?
        `display: visible;` :
        `display: none;`
    }
`;