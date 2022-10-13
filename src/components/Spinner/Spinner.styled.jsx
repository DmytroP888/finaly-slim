import styled from "styled-components"

import {
  GRAY_BLUE,
  ORANGE_RED,
  CYAN_DARK
} from "../../assets/themes/colors"

export const Loader = styled.div`
    position: absolute;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid ${GRAY_BLUE};
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 7;

    &:before,
    &:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 4px solid transparent;
    }
    &:before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-top-color: ${ORANGE_RED};
      -webkit-animation: spin 3s linear infinite;
      animation: spin 3.5s linear infinite;
    }
    &:after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    border-top-color: ${CYAN_DARK};
      -webkit-animation: spin 1.5s linear infinite;
      animation: spin 1.75s linear infinite;
    }
         
    @-webkit-keyframes spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    @keyframes spin {
        from {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
`;
