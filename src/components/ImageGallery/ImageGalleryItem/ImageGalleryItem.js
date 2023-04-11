import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';

import Modal from '../Modal/Modal';

const ImageGalleryItem = (smallImg, mainImg) => {
  const [showModalImage, setShowModalImage] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  console.log(modalUrl);

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
          src={smallImg.smallImg}
          data-url={mainImg.mainImg}
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
  smallImg: PropTypes.string,
  mainImg: PropTypes.string,
};

export default ImageGalleryItem;
