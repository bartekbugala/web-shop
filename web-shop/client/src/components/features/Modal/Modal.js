import React from 'react';
import './Modal.scss';
import Button from '../../common/Button/Button';

const Modal = ({ children, cart, handleModal }) => (
  <div className="modal__overlay">
    <div className="modal__modal-window">
      <Button
        variant="danger"
        style={{ background: `white`, float: `right` }}
        onClick={handleModal}>
        x
      </Button>
      {children}
    </div>
  </div>
);

export default Modal;
