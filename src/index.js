import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css';
import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);