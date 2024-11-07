import styled, { keyframes } from "styled-components";
import { COLORS } from '../constants';
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    margin: 10px 20px;
    font-size: 24px;
    color: ${ COLORS.h1 };
    text-decoration: none;
    transition-duration: 0.2s;

    &:hover {
        color: ${ COLORS.h3 };
    }
`;

const textSlide = keyframes`
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
`;

export const Title = styled(NavLink)`
    font-family: "Almendra", serif;
    font-size: 36px;
    margin: 0 20px;
    font-weight: bold;

    background: linear-gradient(
        to right,
        ${ COLORS.h1 } 30%,
        ${ COLORS.h3 } 50%,
        ${ COLORS.h1 } 70%
    );
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: ${textSlide} 4s ease-in-out infinite alternate;

    &:hover {
        opacity: 1;
    }
`;

export const HeaderWrapper = styled.div`
    color: white;
    background: ${ COLORS.background };
    position: fixed;
    display: flex;
    width: 100%;
    height: 48px;
    top: 0;
    z-index: 2;
    >div {
        max-width: 1024px;
        margin: 0 auto;
    }
`;
