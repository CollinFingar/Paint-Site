import React, { useEffect } from 'react';
import { SectionWrapper } from './section.style.js';

const Section = ({children, color}) => {

    return (<SectionWrapper $highlightColor={ color }>
        { children }
    </SectionWrapper>)
};
export default Section;
