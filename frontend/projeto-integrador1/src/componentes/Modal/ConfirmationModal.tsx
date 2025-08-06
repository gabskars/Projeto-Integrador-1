import React from 'react';
import './ConfirmationModal.css';

interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ onClose, onConfirm, message }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;