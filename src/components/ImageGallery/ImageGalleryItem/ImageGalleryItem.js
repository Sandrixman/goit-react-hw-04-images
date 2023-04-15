import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ smallImg, mainImg }) => {
  const [showModalImage, setShowModalImage] = useState(false);

  const toggleModalImage = () => {
    setShowModalImage(prevState => !prevState);
  };

  return (
    <>
      <GalleryCard>
        <GalleryImage
          src={smallImg}
          alt=""
          onClick={e => {
            // document.getElementById('root').style.overflow = 'hidden';
            toggleModalImage();
          }}
        />
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
