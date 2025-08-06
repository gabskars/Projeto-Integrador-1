import React, { useState, useEffect } from 'react';
import './AlmoxarifadoFormModal.css';

interface AlmoxarifadoFormModalProps {
  onClose: () => void;
  onSave: (item: any) => void;
  title: string;
  item?: any; // Item selecionado para edição
}

const AlmoxarifadoFormModal: React.FC<AlmoxarifadoFormModalProps> = ({ onClose, onSave, title, item }) => {
  const [formData, setFormData] = useState({
    id: item?.id || null, // Adicionado o ID para edição
    nome: item?.nome || '',
    quantidade: item?.quantidade || '',
    categoria: item?.categoria || '',
    preco: item?.preco || '',
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Nome do Produto</label>
            <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="quantidade">Quantidade</label>
            <input type="number" id="quantidade" value={formData.quantidade} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="categoria">Categoria</label>
            <input type="text" id="categoria" value={formData.categoria} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="preco">Preço Unitário</label>
            <input type="text" id="preco" value={formData.preco} onChange={handleChange} required />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlmoxarifadoFormModal;