import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Almoxarifado.css';
import Header from '../../componentes/Header/Header';
import AlmoxarifadoFormModal from '../../componentes/Modal/AlmoxarifadoFormModal';
import ConfirmationModal from '../../componentes/Modal/ConfirmationModal';

const Almoxarifado: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, nome: 'Óleo Lubrificante', quantidade: 30, categoria: 'Óleo', preco: 'R$ 35,00' },
    { id: 2, nome: 'Pneu Traseiro', quantidade: 30, categoria: 'Pneu', preco: 'R$ 95,00' },
    { id: 3, nome: 'Bateria', quantidade: 30, categoria: 'Elétrica', preco: 'R$ 105,00' },
    { id: 4, nome: 'Pneu Dianteiro', quantidade: 25, categoria: 'Pneu', preco: 'R$ 85,00' },
    { id: 5, nome: 'Filtro de Ar', quantidade: 50, categoria: 'Filtro', preco: 'R$ 45,00' },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Novo estado para controlar o tipo de pesquisa
  const [searchType, setSearchType] = useState<'nome' | 'categoria'>('nome');

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    action: 'add' | 'edit' | 'delete' | null;
    selectedItem: any | null;
  }>({
    isOpen: false,
    action: null,
    selectedItem: null,
  });

  // Funções para lidar com os modais e ações (mantidas como estão)
  const handleOpenModal = (action: 'add' | 'edit' | 'delete', item: any = null) => { /* ... */ };
  const handleCloseModal = () => { /* ... */ };
  const handleSaveItem = (newItem: any) => { /* ... */ };
  const handleConfirmDelete = () => { /* ... */ };
  const handleDeleteClick = () => { /* ... */ };
  const handleEditClick = () => { /* ... */ };

  // Lógica de filtragem aprimorada para lidar com os dois tipos de pesquisa
  const filteredItems = items.filter(item => {
    if (searchType === 'nome') {
      return item.nome.toLowerCase().includes(searchTerm.toLowerCase());
    } else { // searchType === 'categoria'
      return item.categoria.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="almoxarifado-container">
      <Header />
      <div className="almoxarifado-header-content">
        <Link to="/" className="almoxarifado-back-arrow">
          ←
        </Link>
        <h2>Estoque</h2>
      </div>

      <div className="search-bar">
        {/* Adicionei botões para alternar o tipo de pesquisa */}
        <div className="search-type-selector">
          <button
            className={`search-btn ${searchType === 'nome' ? 'active' : ''}`}
            onClick={() => setSearchType('nome')}
          >
            Nome
          </button>
          <button
            className={`search-btn ${searchType === 'categoria' ? 'active' : ''}`}
            onClick={() => setSearchType('categoria')}
          >
            Categoria
          </button>
        </div>
        <input 
          type="text" 
          placeholder={`Pesquisar por ${searchType === 'nome' ? 'nome do produto' : 'categoria'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="almoxarifado-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Categoria</th>
            <th>Preço Unitário</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr 
              key={item.id} 
              className={`table-row ${item.id === selectedItemId ? 'selected-row' : ''}`}
              onClick={() => setSelectedItemId(item.id)}
            >
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.categoria}</td>
              <td>{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="almoxarifado-footer">
        <button className="btn-almoxarifado" onClick={handleEditClick}>
          Editar item
        </button>
        <button className="btn-almoxarifado" onClick={() => handleOpenModal('add')}>
          Adicionar novo item
        </button>
        <button className="btn-almoxarifado" onClick={handleDeleteClick}>
          Excluir item
        </button>
      </div>

      {modalState.isOpen && modalState.action !== 'delete' && (
        <AlmoxarifadoFormModal
          onClose={handleCloseModal}
          onSave={handleSaveItem}
          title={modalState.action === 'add' ? 'Adicionar Produto' : 'Editar Produto'}
          item={modalState.selectedItem}
        />
      )}

      {modalState.isOpen && modalState.action === 'delete' && (
        <ConfirmationModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          message={`Tem certeza que deseja excluir o item ${modalState.selectedItem?.nome}?`}
        />
      )}
    </div>
  );
};

export default Almoxarifado;