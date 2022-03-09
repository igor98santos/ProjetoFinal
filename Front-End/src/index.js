import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Promocoes from './pages/promocoes/Promocoes.jsx';
import Home from './pages/home/Home.jsx'
import NavBar from './pages/navbar/NavBar';
import Destino from './pages/destino/Destino';
import Contato from './pages/contato/Contato';
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home/>}> </Route>
    <Route path='/Promocoes'  element={<Promocoes/>}> </Route>
    <Route path='/Destinos'  element={<Destino/>}> </Route>
    <Route path='/Contatos'  element={<Contato/>}> </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
