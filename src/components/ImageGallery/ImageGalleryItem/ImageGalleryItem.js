import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';

import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ smallImg, mainImg }) => {
  const [showModalImage, setShowModalImage] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const toggleModalImage = () => {
    setShowModalImage(prevState => !prevState);
  };

  const setModalImage = modalUrl => {
    setModalUrl(modalUrl);
  };

  return (
    <>
      <GalleryCard>
        <GalleryImage
          src={smallImg}
          data-url={mainImg}
          alt=""
          onClick={e => {
            // document.getElementById('root').style.overflow = 'hidden';
            toggleModalImage();
            setModalImage(e.currentTarget.dataset.url);
          }}
        />
      </GalleryCard>
      {showModalImage && (
        <Modal modalUrl={modalUrl} onToggleModalImage={toggleModalImage} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
