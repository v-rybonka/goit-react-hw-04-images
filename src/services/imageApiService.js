import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29770262-893fd435ac33616a29d285b38';

export const fetchArticles = async (query, page) => {
   try {
   const response = await axios.get(
    `?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  );
  return response.data;
 } catch (error) {
  throw new Error(error)
 }
};
