import React, { useEffect } from 'react';
import { HeaderWrapper } from './Header.style.js';
import {
    Link, RouterProvider
  } from "react-router-dom";

const Header = () => {

    useEffect(() => {}, []);

    return (<HeaderWrapper>
        <span>Skipper Painting</span>
        <Link to="/guide">Guide</Link>
        <Link to="/recipes">Recipes</Link>
        
    </HeaderWrapper>)
};
export default Header;
