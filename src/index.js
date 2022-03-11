import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Components/gallery'
import Details from './Components/details';
import Random from './Components/randomBeer'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>

        <Route path="/" element={<App />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/details/:_id" element={<Details />} />
        <Route path="/randomBeer" element={<Random />} />
        
        
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
