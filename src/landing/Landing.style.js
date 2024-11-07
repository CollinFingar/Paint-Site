import styled from "styled-components";
import { COLORS } from '../constants';

export const LandingWrapper = styled.div`
    position: relative;
    >h1:first-child {
        position: absolute;
        transform: rotate(90deg);
        right: -90px;
        top: 130px;
        color: ${COLORS.h2};
    }
`;

export const Triple = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 64px);
    margin-top: 24px;
    

    >div {
        flex-basis: calc(33% - 32px);
        margin-bottom: 16px;
        transition-duration: .2s;
        color: white;
        &:hover {
            cursor: pointer;
            background: ${COLORS.h3};
        }

        img {
            aspect-ratio: 1 / 1;
            width: 100%;
        }

        >div {
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            padding-top: 12px;
        }
    }
`;
