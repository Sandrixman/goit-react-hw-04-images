import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ smallImg, mainImg }) => {
  const [showModalImage, setShowModalImage] = useState(false);

  const toggleModalImage = () => {
    setShowModalImage(prevState => !prevState);
    document.querySelector('body').classList.toggle('hidden');
  };

  return (
    <>
      <GalleryCard>
        <GalleryImage src={smallImg} alt="" onClick={toggleModalImage} />
      </GalleryCard>
      {showModalImage && (
        <Modal modalUrl={mainImg} onToggleModalImage={toggleModalImage} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
