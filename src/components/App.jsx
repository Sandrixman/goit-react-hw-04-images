import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const inputQuery = getSearchQuery => {
    setSearchQuery({ getSearchQuery });
  };

  return (
    <>
      <Searchbar onSubmit={inputQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <ToastContainer />
    </>
  );
};

export default App;
