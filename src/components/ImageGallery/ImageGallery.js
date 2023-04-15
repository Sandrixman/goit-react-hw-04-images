import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtoTypes from 'prop-types';

import { Gallery, App, ErrorImg } from './ImageGallery.styled';
import errorImg from './vecteezy_404-landing-page_6549647.jpg';

import imageApi from 'services/image-api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';

const ImageGallery = ({ searchQuery, searchPage, changePage }) => {
  const [imageApiAnswer, setImageApiAnswer] = useState([]);
  const [status, setStatus] = useState('idle');
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    if (searchPage === 1) {
      setStatus('panding');
      setImageApiAnswer([]);
    }
    imageApi(searchQuery, searchPage)
      .then(({ data }) => {
        if (data.total === 0) {
          setStatus('rejected');
          return toast.error('incorrect query', {
            position: 'top-center',
          });
        }
        setImageApiAnswer(prevState => [...prevState, ...data.hits]);
        setStatus('resolved');
        setTotalResult(data.total);
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [searchQuery, searchPage]);

  const loadMore = () => {
    changePage(prevState => prevState + 1);
  };

  if (status === 'idle') {
    return;
  }
  if (status === 'panding') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <ErrorImg src={errorImg} alt="Error image"></ErrorImg>;
  }

  if (status === 'resolved') {
    return (
      <App>
        <Gallery>
          {imageApiAnswer.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              smallImg={webformatURL}
              mainImg={largeImageURL}
            />
          ))}
        </Gallery>
        {imageApiAnswer && totalResult > imageApiAnswer.length && (
          <Button onIncrementPage={loadMore} />
        )}
      </App>
    );
  }
};

ImageGallery.propTypes = {
  searchQuery: ProtoTypes.string.isRequired,
  searchPage: ProtoTypes.number.isRequired,
  changePage: ProtoTypes.func.isRequired,
};

export default ImageGallery;
