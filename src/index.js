import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import Redux from './component/Redux';
import Resource from './component/Resource';
import Footer from './component/Footer';
import Query from './component/Query';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/redux' element={<Redux />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/query' element={<Query />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
   
  </React.StrictMode>
);

reportWebVitals();
