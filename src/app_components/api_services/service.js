import axios from 'axios';
import qs from 'qs';
import {
  API_KEY,
  BASE_URL,
  NOW_PLAYING,
  IMAGE_URL,
  SEARCH_URL,
} from '../api_config/api';

let url= BASE_URL;
export const getMovies = async(type)=>{
    const movieURL= url+'movie/' + type;
    try{
        const params={
            api_key:API_KEY,
            language:'en-US',
            page: 1
        };
    
    const moviesNowPlaying = axios.create({
        paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });
    const response = await moviesNowPlaying.get(movieURL, { params });
    const result = response.data.results;
    return result;
} catch(error){
    console.log('error'+error);
    throw error
}
};

export const getMovieSearchResults = async (searchQuery, type) => {
    const searchURL = url + SEARCH_URL + type;
    console.log('type' + type);
    console.log('searchURL' + searchURL);
    console.log('searchQuery' + searchQuery);
    try {
      const params = {
        api_key: API_KEY,
        language: 'en-US',
        query: searchQuery,
        include_adult: false,
        page: 1,
      };
      const searchResults = axios.create({
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat'}),
      });
  
      const response = await searchResults.get(searchURL, { params });
      const result = response.data.results;
      return result;
    } catch (error) {
      console.log('error' + error);
      throw error;
    }
  };
  
  export const getMovieDetails = async (id, listType) => {
    listType = listType || 'movie';
    const movieDetailURL = `${url}${listType}/${id}`;
    console.log(movieDetailURL);
    try {
      const params = {
        api_key: API_KEY,
        language: 'en-US',
      };
  
      const movieDetails = axios.create({
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat' }),
      });
      const response = await movieDetails.get(movieDetailURL, { params });
      const result = response.data;
      return result;
    } catch (error) {
      console.log('error' + error);
      throw error;
    }
  };

  export const getTVShows = async (type) => {
    const tvURL = url + 'tv/' + type;
    try {
      const params = {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      };
  
      const tvShows = axios.create({
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat'}),
      });
  
      const response = await tvShows.get(tvURL, { params });
      const result = response.data.results;
      return result;
    } catch (error) {
      console.log('error' + error);
      throw error;
    }
  };
  