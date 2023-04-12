import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Searchbar onSubmit={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <ToastContainer />
    </>
  );
};

export default App;
