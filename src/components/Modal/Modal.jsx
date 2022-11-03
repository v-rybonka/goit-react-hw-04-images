import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { WrapModal, ModalWindow } from './Modal.styled';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.OnClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.OnClickEsc);
  }

  OnClickEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image, alt } = this.props;
    return (
      <WrapModal onClick={this.onBackdropClick}>
        <ModalWindow>
          <img src={image} alt={alt} />
        </ModalWindow>
      </WrapModal>
    );
  }
}
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
