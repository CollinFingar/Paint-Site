import React, { useEffect } from 'react';
import { HeaderWrapper, Title, NavLink } from './Header.style.js';
import { Link } from "react-router-dom";

const Header = () => {

    useEffect(() => {}, []);

    return (<HeaderWrapper>
        <div>
            <Title to="/">Skipper Painting</Title>
            <NavLink to="/guide">Guide</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        
    </HeaderWrapper>)
};
export default Header;
