import React, { useEffect } from 'react';
import { AppWrapper } from './App.style.js';
import Header from '../header/Header';
import Landing from '../landing/Landing';
import Guide from '../guide/Guide';
import Gallery from '../gallery/Gallery';
import Footer from '../footer/Footer';
import About from '../about/About';
import {
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom'

async function callNetlifyFunction() {
    try {
      const response = await fetch('/.netlify/functions/retrieveData');
      const data = await response.json();
      console.log(data); // Handle the response data
    } catch (error) {
      console.error('Error calling Netlify function:', error);
    }
  }


const App = () => {

    useEffect(() => {
        callNetlifyFunction();
    }, []);

    return (
    <BrowserRouter>
        <Header />

        <AppWrapper>
            <Routes>
                <Route path="/" Component={Landing} />
                <Route path="/guide" Component={Guide} />
                <Route path="/gallery" Component={Gallery} />
                <Route path="/about" Component={About} />
                <Route path="/recipes" Component={Landing} />
            </Routes>
            <Footer />
        </AppWrapper>
    </BrowserRouter>)
};
export default App;
