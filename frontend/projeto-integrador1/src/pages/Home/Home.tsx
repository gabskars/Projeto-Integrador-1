import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header/Header';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container"> {/* Verifique se a classe é .home-container */}
      <Header />

      <main className="home-main-content">
        <h1>Bem Vindo(a)!</h1>
      </main>

      <Link to="/" className="home-back-arrow">
        ←
      </Link>
    </div>
  );
};

export default Home;