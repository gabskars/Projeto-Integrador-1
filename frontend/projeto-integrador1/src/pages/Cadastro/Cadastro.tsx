import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import logo from '../../assets/logo.png'; // Verifique o caminho da sua logo

const Cadastro: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para envio do formulário de cadastro
    console.log('Formulário de cadastro enviado!');
  };

  return (
    <div className="cadastro-page-container">
      <Link to="/login" className="cadastro-back-arrow">
        ←
      </Link>
      
      <div className="cadastro-content-wrapper">
        {/* Lado esquerdo com as informações */}
        <div className="cadastro-left-content">
          <h2>Criar uma conta</h2>
          <div className="privacy-box">
            <label className="privacy-text">
              <input type="checkbox" className="privacy-checkbox" />
              Declaro estar ciente que os dados pessoais serão utilizados no sistema de acordo com a Lei Geral de Proteção de Dados (nº 13.709/2018). <Link to="#">Ver mais</Link>
            </label>
          </div>
        </div>

        {/* Lado direito com o formulário, dentro do "quadro" branco */}
        <div className="cadastro-form-card">
          <h2>Cadastre-se</h2>
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="cadastro-input-group">
              <label htmlFor="nome">Nome*</label>
              <input type="text" id="nome" placeholder="Seu nome completo" required />
            </div>
            <div className="cadastro-input-group">
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" placeholder="nome@exemplo.com" required />
            </div>
            <div className="cadastro-input-group">
              <label htmlFor="confirmEmail">Confirme seu E-mail*</label>
              <input type="email" id="confirmEmail" placeholder="nome@exemplo.com" required />
            </div>
            <div className="cadastro-input-group">
              <label htmlFor="senha">Senha*</label>
              <input type="password" id="senha" placeholder="********" required />
            </div>
            <div className="cadastro-input-group">
              <label htmlFor="confirmSenha">Confirme sua Senha*</label>
              <input type="password" id="confirmSenha" placeholder="********" required />
            </div>
            <button type="submit" className="btn-cadastro-submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;