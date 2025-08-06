import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecuperarSenha.css';
import EliteMotosLogo from '../../assets/logo.png';
import RecuperarSenhaIllustration from '../../assets/imagem01.svg';
// Importe sua instância do Axios aqui
// Ex: import api from '../../services/api';

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // =========================================================================
    // LÓGICA PARA TESTAR COM O BACK-END ATIVO (DESCOMENTAR PARA USAR)
    // =========================================================================
    /*
    try {
      // Endpoint para a rota de recuperação de senha no seu back-end
      const response = await api.post('/forgot-password', { email });
      
      if (response.status === 200) {
        alert('As instruções para recuperar sua senha foram enviadas para o seu e-mail!');
        setEmail(''); // Limpa o campo do e-mail
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail de recuperação:', error);
      alert('Ocorreu um erro. Verifique o e-mail e tente novamente.');
    }
    */
    
    // =========================================================================
    // LÓGICA DE SIMULAÇÃO PARA TESTAR O FRONT-END (COMENTAR QUANDO USAR O BACK-END)
    // =========================================================================
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Simulando envio de e-mail para: ${email}`);
      alert('As instruções para recuperar sua senha foram enviadas para o seu e-mail!');
      setEmail('');
    } catch (error) {
      console.error('Ocorreu um erro na simulação:', error);
      alert('Ocorreu um erro. Verifique o e-mail e tente novamente.');
    }
  };

  return (
    <div className="recuperar-senha-container">
      <div className="recuperar-senha-left">
        <Link to="/login" className="back-arrow">
          ←
        </Link>
        <div className="logo-section">
          <img src={EliteMotosLogo} alt="Elite Motos Logo" className="logo" />
        </div>
        <div className="illustration-section">
          <img src={RecuperarSenhaIllustration} alt="Ilustração de recuperação" className="illustration" />
        </div>
      </div>
      
      <div className="recuperar-senha-right">
        <div className="recuperar-senha-card">
          <h2>Recuperar a senha</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email de recuperação</label>
              <input type="email" id="email" placeholder="Ex: joao@gmail.com" required />
            </div>
            <button type="submit" className="btn-recuperar-senha">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;