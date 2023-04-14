import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';

import { Layout } from './Layout/Layout';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);

  return (
    <>
      <Layout>
        <Searchbar onSubmit={setSearchQuery} resetPage={setSearchPage} />
        <ImageGallery
          searchQuery={searchQuery}
          searchPage={searchPage}
          changePage={setSearchPage}
        />
      </Layout>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
