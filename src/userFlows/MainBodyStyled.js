import styled from "styled-components";
import {Link, NavLink } from "react-router-dom";

export const Animation = styled.div`
    height: 200px;
    width:200px;
`;

export const BodyStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;

`;

export const ParentBody = styled.div`
    display: flex;
    justify-content: center;
    height: 869px;
`;

export const Button = styled.button`
    width: 99px;
    height: 56px;
    border-radius: 8px;
    background-color: #ff2957;
    color: white;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
    font-weight: 600;

    &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
    }

    &:disabled {
    background-color: rgba(255, 41, 87, 0.3);
    color: rgba(255, 255, 255, 0.3);
    }

    @media screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 12px;
    padding: 0.2rem 0.5rem;
    }
    /* height: 35px;
    width: auto;
    } */

    @media screen and (orientation: landscape) and (max-width: 960px) {
    height: 35px;
    width: 120px;
    }
`;

export const Footer = styled.footer`
    height: 4vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 3% 8%;
    gap: 25px;
    background-color: white;
    z-index: 1;
    border: 1px solid rgba(0, 104, 255, 0.1);

    @media (max-width: 960px) {
    position: sticky;
    height: 10vh;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    }
`;
