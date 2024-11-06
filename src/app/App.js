import React, { useEffect } from 'react';
import { AppWrapper } from './App.style.js';
import Header from '../header/Header';

const App = () => {

    useEffect(() => {
        fetch('https://cdn.contentful.com/spaces/cj6ju1ololnf/environments/master/entries?access_token=Gc9g-YUtF0lV8bQrxsxtkNa3qYLCjUJdfhmEwnvG1FU')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    return (<AppWrapper>
        <Header />
    </AppWrapper>)
};
export default App;
