import styled from "styled-components"

import {
    GRAY_LIGHT,
    GRAY_DARK,
    GRAY_BLUE,
    CYAN_BLUE
} from "../../assets/themes/colors"

export const MainBlockFooter = styled.footer`
    position: absolute;
    width: 517px;
    height: 100%;
    right: 0px;
    background: ${CYAN_BLUE};
    @media (max-width: 1000px){
        width: 100%;
        height: 326px;
        bottom: 0px;
        top: 700px;
        z-index: 4;
    }
    @media (max-width: 660px){
        width: 100%;
        height: 380px;
        bottom: 0px;
        top: 700px;
        z-index: 4;
    }
    @media (max-width: 600px){
        top: 650px;
        z-index: 4;
    }
`;

export const SummaryBlockFooter = styled.div`
    position: absolute;    
    width: 288px;
    height: 166px;
    margin: 0px 0px 50px 105px;
    @media (max-width: 1000px){
        margin: 80px 0px 0px 32px;
    }
    @media (max-width: 660px){
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 280px;
        height: 152px;
        top: 40px;
    }
`;

export const Notfoodblock = styled.div`
    position: absolute;    
    width: 288px;
    height: 166px;
    margin: 210px 0px 0px 105px;
    z-index: 1;
    @media (max-width: 1000px){
        margin: 80px 0px 0px 370px;
    }
    @media (max-width: 660px){
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 280px;
        height: 104px;
        max-height: 90px;
        top: 232px;
    }
`;

export const BlockTitleFoter = styled.h3`
    width: 288px;
    height: 34px;
    font-family: 'Verdana-700';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_DARK};
`;

export const AuxiliaryBlock = styled.div`
    display: flex;
`;

export const NamedataBlock = styled.ol`
    font-family: 'Verdana-400';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_BLUE};
    width: 180px;
    margin-right: 20px;
    li:nth-child(n+4){ 
        margin-left: 8px; 
    }
`;

export const NameDataLi = styled.li`
    margin: 12px 0px;
`;

export const DataBlock = styled.ol`
    font-family: 'Verdana-400';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_BLUE};
`;

export const DataBlockNotfood = styled(DataBlock)`
    max-width: 260px;
    overflow: auto;
    height: 130px;
    overflow-wrap: break-word;
    @media (max-width: 660px){
        max-height: 90px;
`;

export const ImageLeaves = styled.img` 
    width: 740px;
    height: 710px;
    right: 0px;
    position: absolute;
    top: 70px;
    z-index: 0;
    @media (max-width: 1000px){
       display:none;
    }
`;

export const ImageLeavesTablet = styled.img` 
    @media (max-width: 1000px){
        position: absolute;
        z-index: 0;
        right: 0px;
        bottom: 0px;
    }
    @media (min-width: 1000px){
        display: none;
    }
    @media (max-width: 660px){
        display: none;
    }
`;

export const NavBlockUserFooter = styled.nav` 
     @media (min-width: 1000px){
        margin: 120px 40px 139px 20px;
        justify-content: flex-end;
        height: 32px;
        display: flex;
        align-items: center;
        font-family: "GothamPro-700";
        font-size: 14px;
        line-height: 13px;
        letter-spacing: 0.04em;
        z-index: 2;
        position: relative;
    }
    @media only screen and (max-width: 1000px){
        display: none;
    }
    
`;

export const NameMenuUser = styled.div` 
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130px;
    color: ${GRAY_DARK};
    text-align: right;
    padding-right: 20px;
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