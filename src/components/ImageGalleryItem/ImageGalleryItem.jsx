import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.image;
    return (
      <>
        <GalleryItem>
          <GalleryItemImage
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
          {this.state.showModal && (
            <Modal
              image={largeImageURL}
              alt={tags}
              onClose={() => this.toggleModal()}
            />
          )}
        </GalleryItem>
      </>
    );
  }
}
