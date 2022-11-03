import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29770262-893fd435ac33616a29d285b38';

export const fetchArticles = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  );
  return response.data;
};
