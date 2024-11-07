import styled from "styled-components";
import { COLORS } from '../../constants';

export const CardWrapper = styled.div`
    background-color: ${({$highlightColor}) => COLORS[$highlightColor]};
    padding: 12px;

    img {
        width: 100%;
    }
`;
