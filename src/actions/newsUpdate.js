// TODO: use redux-thunk to delay dispatch of actions when dealing with real api calls to backend
import newsData from '../assets/data/news.json';

export const GET_ALL_NEWS_UPDATE = 'GET_ALL_NEWS_UPDATE';
export const getAllNewsUpdate = () => ({
  type: GET_ALL_NEWS_UPDATE,
  payload: newsData,
});
