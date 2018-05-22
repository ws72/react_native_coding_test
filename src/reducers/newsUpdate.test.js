import { List } from 'immutable';
import reducer from './newsUpdate';
import { GET_ALL_NEWS_UPDATE } from '../actions/newsUpdate';

describe('news update reducer', () => {
  const initialState = List([]);

  it('should return initial state', () => {
    expect(reducer()).toEqual(initialState);
  });
  describe(`${GET_ALL_NEWS_UPDATE}`, () => {
    const newsUpdates = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ];
    const newState = reducer(
      initialState,
      {
        type: GET_ALL_NEWS_UPDATE,
        payload: newsUpdates,
      },
    );
    it('should get all news updates', () => {
      expect(newState.equals(List(newsUpdates))).toBeTruthy();
    });
  });
});
