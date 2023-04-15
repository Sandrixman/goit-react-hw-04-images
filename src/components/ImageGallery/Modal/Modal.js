import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBlock, Btn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ modalUrl, onToggleModalImage }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModalImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModalImage]);

  return createPortal(
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          onToggleModalImage();
        }
      }}
    >
      <ModalBlock>
        <img src={modalUrl} alt="" />
        <Btn onClick={onToggleModalImage}>X</Btn>
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  modalUrl: PropTypes.string,
  onToggleModalImage: PropTypes.func,
};

export default Modal;
