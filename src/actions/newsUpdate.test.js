import configureStore from 'redux-mock-store';
import * as actions from './newsUpdate';
import newsData from '../assets/data/news.json';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('news updates actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it(`should dispatch ${actions.GET_ALL_NEWS_UPDATE}`, () => {
    store.dispatch(actions.getAllNewsUpdate());
    const expectedAction = {
      type: actions.GET_ALL_NEWS_UPDATE,
      payload: newsData,
    };

    const action = store.getActions()[0];

    expect(action).toEqual(expectedAction);
  });
});
