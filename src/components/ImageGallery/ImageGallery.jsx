import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryImage } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryImage>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </GalleryImage>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.objectOf(
        PropTypes.shape({
          webformatURL: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
