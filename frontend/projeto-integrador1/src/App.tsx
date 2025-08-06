import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from './pages/Inicial/Inicial';
import Login from './pages/Login/Login';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Almoxarifado from './pages/Almoxarifado/Almoxarifado';
import AlmoxarifadoForm from './pages/Almoxarifado/AlmoxarifadoForm';
import Perfil from './pages/Perfil/Perfil';
import './App.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/almoxarifado" element={<Almoxarifado />} />
        <Route path="/adicionar-item" element={<AlmoxarifadoForm />} />
        <Route path="/editar-item" element={<AlmoxarifadoForm />} />
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;