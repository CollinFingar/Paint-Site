import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";
import { COLORS } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Sora', sans-serif;
    padding: 0;
    margin: 0;
    background: ${COLORS.background};
    color: black;
    box-sizing: border-box;
  }
`;

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
        <GlobalStyle />
        <App/>
    </Provider>
);

