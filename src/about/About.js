import React, { useEffect } from 'react';
import { AboutWrapper } from './About.style.js';

const About = () => {

    useEffect(() => {}, []);

    return (<AboutWrapper>
        <span>
            <h1>Hello!</h1>
                <p>My name is Collin, and I love to paint miniatures. I picked up the hobby when COVID struck, and, several years and hundreds of figures later, I'm still painting! Around this site, you can find many of my recent projects along with the paint recipes used for them.</p>
            <h1>About the Site</h1>
                <p>I created it using React, styled-components, Netlify, and Contentful.</p>
                <p>You can find the source code for this webpage over <a href="https://www.google.com">here</a>!</p>
        </span>
    </AboutWrapper>)
};
export default About;
