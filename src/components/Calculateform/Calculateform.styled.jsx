import styled from "styled-components"

import {
    WHITE,
    GRAY_LIGHT,
    GRAY_BLUE,
    GRAY_DARK,
    ORANGE_RED,
    ORANGE_RED_SHADOW
} from "../../assets/themes/colors"

export const WrapperCalcform = styled.article` 
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 545px;
    height: 343px;
    left: 16px;
    top: 293px;
    z-index: 3;
    @media (max-width: 1000px){
        left: 32px;
        top: 180px;
    }
    @media (max-width: 600px){
        width: 93%;
        left: 20px;
        top: 150px;
    }
`;

export const BoxcontrolWidth = styled.div`
    @media (max-width: 600px){
        max-width: 280px;
    }
`;

export const TitleCalcform = styled.h1` 
    font-family: "Verdana-700";
    font-size: 34px;
    line-height: 41px;
    color: ${GRAY_DARK};
    @media (max-width: 600px){
        font-family: "Verdana-700";
        font-size: 18px;
        line-height: 26px;
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
        height: 24px;
        margin: 32px 32px 0px 0px;
        display: flex;
`;

export const TitleRadio = styled(BlockInputs)`
    @media (max-width: 600px){
        height: 16px;
        margin: 32px 32px 0px 0px;
        border-bottom: none;
`;

export const BlockRadio = styled.div`
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

export const LabelRadio = styled.label`
    font-family: "Verdana-400";
    color: ${GRAY_BLUE};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    position: absolute;
    display: flex;
    margin: 0px -14px 0px 0px;
`;



export const InputRadio = styled.input`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    opacity: 0;
    margin: -1px;
    &:checked + ${LabelRadio} {
        font-family: "Verdana-700";
        color: ${ORANGE_RED};
    };
`;

export const RadioChecked = styled.div`
    margin: 8px 45px 0px 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${WHITE};
    border: 1px solid ${GRAY_LIGHT};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    ${InputRadio}:checked  {
        background: ${ORANGE_RED};
        margin: 4px;
        border-radius: 50%;
        opacity: 1;
        height: 10px;
        width: 10px; 
    };
`;

export const ButtonCalcform = styled.button`
    margin-top: 291px;    
    width: 210px;
    height: 43px;
    left: 323px;
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
    @media (max-width: 1000px){
        left: 0px;
        z-index: 5;
    }
    @media (max-width: 600px){
        margin: 0 auto;
        left: -5%;
        right: 0;
        top: 393px;
    }
`;