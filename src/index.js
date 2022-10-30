import React from 'react';
import { createRoot } from 'react-dom/client';
import MySecondComponent from './components/MySecondComponent';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <MySecondComponent />
    <App />
  </>
);
