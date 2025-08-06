import React from 'react';
import { Link } from 'react-router-dom';
import './Inicial.css'; 
import logoImage from '../../assets/logo.png'; 
import illustrationImage from '../../assets/imagem02.svg';

const Inicial: React.FC = () => {
    return (
        <div className="inicial-container">
            <header className="inicial-header">
                <div className="logo">
                    <img src={logoImage} alt="Elite Motos" className="logo-image" />
                </div>
                <nav className="header-nav">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/cadastro" className="btn-cadastro">Cadastre-se</Link>
                </nav>
            </header>
            <main className="inicial-content">
                <div className="text-content">
                    <h1>Automatize processos,<br />ganhe produtividade.</h1>
                    <Link to="/cadastro" className="btn-cadastro-main">Cadastre-se</Link>
                </div>
                <div className="illustration-content">
                    <img src={illustrationImage} alt="Pessoa ao lado de um carro" className="illustration-image" />
                </div>
            </main>
        </div>
    );
};

export default Inicial;