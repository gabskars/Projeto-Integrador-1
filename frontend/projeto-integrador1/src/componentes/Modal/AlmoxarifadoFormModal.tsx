import React, { useState, useEffect } from 'react';
import './AlmoxarifadoFormModal.css';

interface ItemData {
  id?: number;
  nome: string;
  quantidade: string;
  categoria: string;
  preco: string;
}

interface AlmoxarifadoFormModalProps {
  onClose: () => void;
  onSave: (item: ItemData) => void;
  title: string;
  item?: ItemData | null;
}

const AlmoxarifadoFormModal: React.FC<AlmoxarifadoFormModalProps> = ({ onClose, onSave, title, item }) => {
  const [formData, setFormData] = useState<ItemData>({
    id: item?.id,
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Nome do Produto</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="quantidade">Quantidade</label>
            <input type="text" id="quantidade" name="quantidade" value={formData.quantidade} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="categoria">Categoria</label>
            <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="preco">Preço Unitário</label>
            <input type="text" id="preco" name="preco" value={formData.preco} onChange={handleChange} required />
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