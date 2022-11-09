import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ( {image} ) => {
  const [showModal,setShowModal]= useState(false)
 

 const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

    const { largeImageURL, webformatURL, tags } = image;
    return (
      <>
        <GalleryItem>
          <GalleryItemImage
            src={webformatURL}
            alt={tags}
            onClick={toggleModal}
          />
          {showModal && (
            <Modal
              image={largeImageURL}
              alt={tags}
              onClose={() => toggleModal()}
            />
          )}
        </GalleryItem>
      </>
    );
  }

