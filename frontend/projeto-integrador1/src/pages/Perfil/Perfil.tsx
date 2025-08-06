import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import './Perfil.css';
import profilePlaceholder from '../../assets/imagem03.png';
// import api from '../../services/api';

const Perfil: React.FC = () => {
  const [usuario, setUsuario] = useState({
    nome: 'João da Silva',
    email: 'joao@gmail.com',
    contato: '88 944427922',
    foto: profilePlaceholder,
  });

  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [novoContato, setNovoContato] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const formatarTelefone = (tel: string) => {
    const numeros = tel.replace(/\D/g, '');
    const match = numeros.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
    }
    return tel;
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dados atualizados!');
  };

  const handleExcluirConta = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    alert('Conta excluída com sucesso.');
    setShowDeleteModal(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setUsuario({ ...usuario, foto: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="perfil-page-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="perfil-container">
        <div className="perfil-left">
          <div className="perfil-dados">
            <div className="perfil-foto-container">
              <img src={usuario.foto} alt="Foto de perfil" className="perfil-foto" />
              <input type="file" id="photo-upload" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              <label htmlFor="photo-upload" className="upload-label">
                Mudar foto
              </label>
            </div>
            <h2>Meu Perfil</h2>
            <div className="perfil-info">
              <p className="info-item">Nome: {usuario.nome}</p>
              <p className="info-item">Email: {usuario.email}</p>
              <p className="info-item">Contato: {formatarTelefone(usuario.contato)}</p>
            </div>
          </div>
        </div>

        <div className="perfil-right">
          <div className="perfil-gerenciamento">
            <h2>Gerenciamento</h2>
          
            <form onSubmit={handleUpdate}>
              <div className="update-field">
                <label htmlFor="novo-email">Atualizar Email</label>
                <input 
                  type="email" 
                  id="novo-email" 
                  placeholder="Novo E-mail"
                  value={novoEmail}
                  onChange={(e) => setNovoEmail(e.target.value)}
                />
              </div>
            
              <div className="update-field">
                <label htmlFor="nova-senha">Atualizar Senha</label>
                <input 
                  type="password" 
                  id="nova-senha" 
                  placeholder="Nova Senha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
              </div>
            
              <div className="update-field">
                <label htmlFor="novo-contato">Atualizar Contato</label>
                <input 
                  type="text" 
                  id="novo-contato" 
                  placeholder="Novo Contato"
                  value={novoContato}
                  onChange={(e) => setNovoContato(e.target.value)}
                />
              </div>
              
              <div className="form-footer">
                    <button type="button" className="btn-excluir-conta" onClick={handleExcluirConta}>
                        Excluir conta
                    </button>
                    <button type="submit" className="btn-salvar">
                         Salvar
                    </button>
</div>
            </form>
          </div>
        </div>
      
        {showDeleteModal && (
          <div className="delete-modal-overlay">
            <div className="delete-modal">
              <h3>Confirmar Exclusão</h3>
              <p>Tem certeza que deseja excluir sua conta? Esta ação é irreversível.</p>
              <div className="modal-buttons">
                <button onClick={() => setShowDeleteModal(false)} className="btn-cancelar">Cancelar</button>
                <button onClick={handleDeleteConfirm} className="btn-confirmar">Confirmar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Perfil;