import styled from "styled-components";
import { COLORS } from '../../constants';

export const SectionWrapper = styled.div`
    background-color: ${({$highlightColor}) => COLORS[$highlightColor]};
    padding: 24px;
    margin: 16px 0px;
`;
