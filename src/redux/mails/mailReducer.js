import { SORT_MAILS, FILTER_MAILS } from './actionCreators';
import { getMails } from '../../mock-server';
import { sort, filter } from './utils';

const initialState = {
  mails: getMails().sort((a, b) => a['date'] - b['date']),
  currentHeaderSorted: 'date',
  way: 'descending',
};

export default function mailReducer(oldState = initialState, action) {
  let newState = { ...oldState };
  if (action.type === SORT_MAILS) {
    return sort(action, newState, oldState);
  } else if (action.type === FILTER_MAILS) {
    return filter(action, newState, initialState);
  } else {
    return newState;
  }
}
