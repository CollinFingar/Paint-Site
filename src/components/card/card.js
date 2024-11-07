import React, { useEffect } from 'react';
import { CardWrapper } from './Card.style.js';

const Card = ({children, color}) => {

    return (<CardWrapper $highlightColor={ color }>
        { children }
    </CardWrapper>)
};
export default Card;
