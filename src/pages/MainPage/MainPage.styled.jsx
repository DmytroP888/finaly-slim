import styled from "styled-components"

import { STRAWB_SHADOW } from "../../assets/themes/colors"

// --------------------- IMG ------------------------
export const ContainerRelative = styled.div` 
    position: relative;
    height: 1055px;
    width: 100%;
    @media (max-width: 600px){
        display: none;
    }
`;

export const FigureBackgroundPNG = styled.img` 
    width: 602px;
    height: 816px;
    float: right;
    margin-top: 10px;
    @media (max-width: 1000px){
        width: 530px;
        position: absolute;
        height: 580px;
        bottom: 0px;
        right: 0px;
    }
`;

export const Screensaver = styled.img` 
    float: right;
    height: 822px;
    position: absolute;
    right: 0px;
    z-index: 1;
`;

export const MainpageTabletLeaves = styled.img`
    position: absolute;    
    bottom: 15px;
`;

export const MainpageTabletStrawb = styled.img`
    position: absolute;
    top: 583px;
    right: 30px;
    filter: drop-shadow(10px 20px 50px ${STRAWB_SHADOW});
`;

export const MainpageTabletBanana = styled.img`
    position: absolute;
    z-index: 2;
    right: 0px;
    bottom: 0px;
`;

// ---------------- Width --------------------- 
export const DesktopWidth = styled.div`
    @media only screen and (max-width: 1000px){
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