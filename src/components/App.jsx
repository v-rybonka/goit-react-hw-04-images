import { useState,useEffect } from 'react';
import { fetchArticles } from 'services/imageApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrap, ErrorMessage } from './App.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Toast } from './Loader/Toast'


export const App = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [messageError, setMessageError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)
  
  

  const createGallery = async (query, page) => {
    try {
      setIsLoading(true);
      
      const gallery = await fetchArticles(query, page);

      if (!gallery.hits) {
        toast.warn('Images was not found');
        return;
      }
      
      if(page === 1){
        toast.success(`Hooray! We found ${gallery.totalHits} images.`);
      setTotal(gallery.totalHits)
      }

      if (!gallery.totalHits) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } 
        setImages(prevState =>[...prevState, ...gallery.hits]);
      
    } catch {
      setMessageError( 'Something is wrong, please try again');
    } finally {
      setIsLoading( false );
    }
  };
  useEffect(() => {
    if (!query) { 
      return;
    }
    createGallery(query, page)
  },[query, page])
  

  const handleFormSubmit = query => {
    setQuery(query)
    setPage(1)
    setTotal(0)
    setImages([])
  
  };
   const loadMore = () => {
    setPage(state => ( state + 1 ));
  };
  
    return (
      <Wrap>
        <Searchbar onSubmit={handleFormSubmit} />
        {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        <Toast/>
        {total > images.length && !isLoading&& <Button onLoadMore={loadMore} />}
      </Wrap>
    );
  }