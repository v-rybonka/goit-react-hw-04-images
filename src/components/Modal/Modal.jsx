import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { WrapModal, ModalWindow } from './Modal.styled';


export const Modal=({image, alt, onClose}) => {
  
  useEffect(() => {
   const OnClickEsc = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
   };
    window.addEventListener('keydown', OnClickEsc);
    return () => {
      window.removeEventListener('keydown', OnClickEsc);
    }
}, [onClose])
 

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  
    return (
      <WrapModal onClick={onBackdropClick}>
        <ModalWindow>
          <img src={image} alt={alt} />
        </ModalWindow>
      </WrapModal>
    );
  }
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
