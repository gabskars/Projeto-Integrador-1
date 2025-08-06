import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { api } from '../../services/api'; // Importa a API
import './AlmoxarifadoForm.css'; // Importa o CSS da tela

interface ItemData {
  nome: string;
  quantidade: string;
  categoria: string;
  preco: string;
}

const AlmoxarifadoForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEditing = location.pathname.includes('/editar-item');
  const [formData, setFormData] = useState<ItemData>({
    nome: '',
    quantidade: '',
    categoria: '',
    preco: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      console.log('Dados para edição:', formData);
      // LÓGICA FUTURA PARA EDIÇÃO COM A API
      /*
      try {
        const response = await api.put(`/itens/${idDoItem}`, formData);
        alert('Item editado com sucesso!');
        navigate('/almoxarifado');
      } catch (error) {
        console.error('Erro ao editar item:', error);
        alert('Erro ao editar item.');
      }
      */
      alert('Item editado com sucesso! (simulação)');
    } else {
      console.log('Dados para novo item:', formData);
      // LÓGICA FUTURA PARA ADICIONAR COM A API
      /*
      try {
        const response = await api.post('/itens', formData);
        alert('Novo item adicionado com sucesso!');
        navigate('/almoxarifado');
      } catch (error) {
        console.error('Erro ao adicionar item:', error);
        alert('Erro ao adicionar item.');
      }
      */
      alert('Novo item adicionado com sucesso! (simulação)');
    }
    navigate('/almoxarifado');
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <Link to="/almoxarifado" className="form-back-arrow">&leftarrow;</Link>
        <h2>{isEditing ? 'Editar item' : 'Adicionar novo item'}</h2>
      </header>

      <form className="item-form" onSubmit={handleSubmit}>
        <div className="input-group-form">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="text"
            id="quantidade"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group-form">
          <label htmlFor="preco">Preço Unitário</label>
          <input
            type="text"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-form-submit">
          {isEditing ? 'Salvar Alterações' : 'Adicionar Item'}
        </button>
      </form>
    </div>
  );
};

export default AlmoxarifadoForm;