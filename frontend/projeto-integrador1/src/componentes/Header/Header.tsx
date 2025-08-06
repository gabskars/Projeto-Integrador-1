import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <img src={logoImage} alt="Elite Motos" className="header-logo-image" />
      </div>
      <nav className="header-nav-links">
        <Link to="/home">Home</Link>
        <Link to="/almoxarifado">Estoque</Link>
        <Link to="/perfil">Perfil</Link> {/* Rota para a tela de Perfil */}
      </nav>
      <div className="header-user-icon">
        <div className="user-circle">
          <span className="material-icons">person</span>
        </div>
      </div>
    </header>
  );
};

export default Header;