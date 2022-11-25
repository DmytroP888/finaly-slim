import styled, { css } from "styled-components"

import {
    WHITE,
    CYAN_DARK,
    BLACK,
    BUTTON_BACKROUND_REF,
    BUTTON_BORDER,
    BUTTON_BACKROUND_Agr,
    GRAY_BLUE,
    BLUE_LIGHT,
    BLUE_HOVER
} from "../assets/themes/colors"

export const centerAlignment = css` 
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`;

export const BlurredBackground = styled.div` 
    position: fixed;
    ${centerAlignment}
    backdrop-filter: blur(10px);
    z-index: 14;
    height: calc(100% + 410px);
    @media (max-width: 1000px){
        height: calc(100% + 900px);
    }
    @media (max-width: 600px){
        height: 100vh;
    }
`;

export const BlockModal = styled.div` 
    position: absolute;
    ${centerAlignment}
    padding: 25px;
    width: 500px;
    height: 200px;
    background-color: ${WHITE};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 15;
    color: ${BLACK};
    box-shadow: 8px 6px 5px ${CYAN_DARK};
    border: 1px solid ${CYAN_DARK};
    @media (max-width: 600px){
        width: min-content;
        height: min-content;
    }
`;

export const BlockButton = styled.div` 
    margin: 11px 0px 0px 25px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px){
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        width: max-content;
    }
`;

export const RefuseButton = styled.button` 
    border-radius: 5px;
    background-color: ${BUTTON_BACKROUND_REF};
    border: 1px ${BUTTON_BORDER} solid;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    &:hover{
        border: solid 1px ${CYAN_DARK};
    }
    @media (max-width: 600px){
        text-align: center;
    }
`;

export const AgreeButton = styled(RefuseButton)` 
    color: ${WHITE};
    background-color: ${BUTTON_BACKROUND_Agr};
    @media (max-width: 600px){
        margin-top: 12px;
    }
`;

export const BlockPolicy = styled.div` 
    position: absolute;
    left: -20px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 35px 35px 35px;
    width: 540px;
    height: 400px;
    background-color: ${WHITE};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 15;
    color: ${BLACK};
    box-shadow: 8px 6px 5px ${CYAN_DARK};
    border: 1px solid ${CYAN_DARK};
    @media (max-width: 600px){
        width: min-content;
        left: -25px;
        padding: 45px 23px 23px 23px;
    }
`;

export const ClickPolicy = styled.span` 
    color: ${BLUE_LIGHT};
    cursor: pointer;
    margin: 10px;
    &:hover {
        text-decoration: underline;
        color: ${BLUE_HOVER};
    }
`;

export const СrossСlosure = styled.div`
    font-weight: bold;
    font-size: 30px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 15px;
    cursor: pointer;
`;

export const TextPolicy = styled.span`
    @media (max-width: 600px){
        max-width: 210px;
        overflow: auto;
        padding: 3px;
    }
`;

export const LawsPolicy = styled.ol`
    margin-top: 20px;
    width: 330px;
    height: 110px;
    font-family: 'Verdana-400';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_BLUE};
    overflow: auto;
    counter-reset:list;
    @media (max-width: 600px){
        max-width: 210px;
        min-height: 100px;
    }
    li:before {
        counter-increment:list;
        content: counters(list, ".") ". ";
    }
`;

export const LawsPolicyList = styled.li`
    margin: 15px 0px;
`;
