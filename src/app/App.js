import React, { useEffect } from 'react';
import { AppWrapper } from './App.style.js';
import Header from '../header/Header';
import Landing from '../landing/Landing';
import Guide from '../guide/Guide';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';

const App = () => {

    useEffect(() => {
        fetch(`https://cdn.contentful.com/spaces/cj6ju1ololnf/environments/master/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (<AppWrapper>
        <Header />
        <Landing />
        <Guide />
        <Gallery />
        <Footer />
    </AppWrapper>)
};
export default App;
