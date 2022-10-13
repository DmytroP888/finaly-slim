import styled from "styled-components"

import {
    WHITE,
    GRAY_LIGHT,
    GRAY_BLUE,
    ORANGE_RED,
    ORANGE_RED_SHADOW
} from "../../assets/themes/colors"

export const WrapperLoginform = styled.article` 
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 545px;
    height: 343px;
    left: 16px;
    top: 306px;
    z-index: 4;
    @media (max-width: 1000px){
        left: 32px;
        top: 240px;
    }
    @media (max-width: 600px){
        width: 93%;
        left: 20px;
        top: 120px;
        display: flex;
        align-items: center;
    }
`;

export const TitleLoginform = styled.h1` 
    font-family: 'GothamPro-700';
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${ORANGE_RED};
    @media (max-width: 600px){
        font-family: "Verdana-700";
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        line-height: 17px;
    }
`;

export const FormBlockInputs = styled.form`
    display: flex; 
    padding-top: 27px;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 600px){
        padding-top: 0px;
        max-width: 241px;
        margin-top: 20px;
`;

export const LeftBlockInputs = styled.div`
    display: flex; 
    width: 240px;
    flex-direction: column;
    margin-right: 32px;
`;

export const RightBlockInputs = styled.div`
    display: flex; 
    width: 240px;
    flex-direction: column;
`;

export const BlockInputs = styled.div`
    height: 37px;
    width: 240px;
    border-bottom: 1px solid ${GRAY_LIGHT};
    margin: 40px 32px 0px 0px;
    font-family: "Verdana-700";
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GRAY_BLUE};
    @media (max-width: 600px){
        height: 28px;
        margin: 40px 32px 0px 0px;
        display: flex;
`;

export const Input = styled.input`
    width: 240px;
    text-align: center;
    @media (max-width: 600px){
        width: 0px;
        margin-left: 5px;
        text-align: center;
        flex-grow: 1;
        margin-left: 5px;
`;

export const LabelInput = styled.label`
`;

export const ButtonLogin = styled.button`
    margin-top: 206px; 
    width: 181px;
    height: 44px;   
    left: 0px;
    position: absolute;
    background: ${ORANGE_RED};
    box-shadow: 0px 4px 10px ${ORANGE_RED_SHADOW};
    border-radius: 30px;
    font-family: "Verdana-700";
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: ${WHITE};
    cursor: pointer;
    z-index: 5;
    @media (max-width: 600px){
        margin: 0 auto;
        left: -5%;
        right: 0;
        top: 233px;
    }
`;

export const ButtonRegister = styled.button`
    margin-top: 206px; 
    width: 181px;
    height: 44px;   
    left: 229px;
    position: absolute;
    background: ${WHITE};
    border: 2px solid ${ORANGE_RED};
    border-radius: 30px;
    font-family: "Verdana-700";
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: ${ORANGE_RED};
    cursor: pointer;
    z-index: 5;
    @media (max-width: 600px){
        margin: 0 auto;
        left: -5%;
        right: 0;
        top: 297px;
    }
`;