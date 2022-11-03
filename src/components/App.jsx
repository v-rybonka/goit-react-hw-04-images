import { Component } from 'react';
import { fetchArticles } from 'services/imageApiService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrap, ErrorMessage } from './App.styled';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    messageError: null,
    isLoading: false,
    total: 0,
  };

  createGallery = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const gallery = await fetchArticles(query, page);

      if (!gallery.hits) {
        throw new Error('Error');
      }

      if (gallery.totalHits !== 0 && !this.state.images.length) {
        toast.success(`Hooray! We found ${gallery.totalHits} images.`);
      }

      if (!gallery.totalHits) {
        return toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...gallery.hits],
          total: gallery.totalHits,
        }));
      }
    } catch {
      this.setState({
        errorMessage: 'Oops, something is wrong, please try again',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.createGallery(this.state.query, this.state.page);
    }
  }

  handleFormSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      total: 0,
      images: [],
    });
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { total, images, isLoading, messageError } = this.state;
    return (
      <Wrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          limit={2}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {total > images.length && <Button onLoadMore={this.loadMore} />}
      </Wrap>
    );
  }
}
