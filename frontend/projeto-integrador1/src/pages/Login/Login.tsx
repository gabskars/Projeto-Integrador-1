import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logoImage from '../../assets/logo.png';
import illustrationImage from '../../assets/imagem01.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // =========================================================================
    // LÓGICA PARA TESTAR COM O BACK-END ATIVO (DESCOMENTAR PARA USAR)
    // =========================================================================
    /*
    try {
      const response = await api.post('/login', { email, password });
      
      if (response.status === 200) {
        alert(response.data.message);
        navigate('/home'); 
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Login inválido. Verifique seu e-mail e senha.');
    }
    */
    
    // =========================================================================
    // LÓGICA DE SIMULAÇÃO PARA TESTAR O FRONT-END (COMENTAR QUANDO USAR O BACK-END)
    // =========================================================================
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const MOCK_EMAIL = 'teste@elite.com';
      const MOCK_PASSWORD = '123';
      if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        alert('Login bem-sucedido!');
        navigate('/home'); 
      } else {
        alert('Login inválido. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.error('Ocorreu um erro na simulação:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <Link to="/" className="login-back-arrow">←</Link>
        <div className="login-logo">
          <img src={logoImage} alt="Elite Motos" className="login-logo-image" />
        </div>
        <img src={illustrationImage} alt="Mecânico com carro no elevador" className="login-illustration" />
      </div>

      <div className="login-right-panel">
        <h2>Bem vindos!</h2>
        <p>
          Ainda não tem cadastro?
          <Link to="/cadastro">Cadastre-se</Link>
        </p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: joao@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <Link to="/recuperar-senha">Esqueceu a senha?</Link>
            </div>
          </div>
          <button type="submit" className="btn-login-submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;