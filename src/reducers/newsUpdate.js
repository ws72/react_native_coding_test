import { List } from 'immutable';
import { GET_ALL_NEWS_UPDATE } from '../actions/newsUpdate';

const initialState = List([]);

export default function newsUpdateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_NEWS_UPDATE:
      return List(action.payload);
    default:
      return state;
  }
}
