import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';

import { Layout } from './Layout/Layout';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Layout>
        <Searchbar onSubmit={setSearchQuery} />
        <ImageGallery searchQuery={searchQuery} />
      </Layout>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
