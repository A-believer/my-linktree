import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);



