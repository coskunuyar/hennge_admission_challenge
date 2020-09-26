export function sort(action, newState, oldState) {
  if (['to'].includes(action.accordingTo)) return newState;

  let way;
  if (newState.way === 'descending') way = 'ascending';
  if (newState.way === 'ascending') way = 'descending';

  if (newState.currentHeaderSorted !== action.accordingTo) {
    way = 'descending';
  }

  const compare = (a, b) => {
    a = a[action.accordingTo];
    b = b[action.accordingTo];
    if (typeof a === 'string') {
      a = a.toLowerCase();
      b = b.toLowerCase();
    }
    if (way === 'ascending') {
      if (typeof a === 'string') return b.localeCompare(a);
      return b - a;
    }
    if (typeof a === 'string') return a.localeCompare(b);
    return a - b;
  };
  newState.mails = [...oldState.mails].sort(compare);
  newState.currentHeaderSorted = action.accordingTo;
  newState.way = way;
  return newState;
}

export function filter(action, newState, initialState) {
  newState.mails = [...initialState.mails].filter((mail) => {
    return action.startDate <= mail.date && action.endDate >= mail.date;
  });
  newState.mails = [...newState.mails].sort((a, b) => a['date'] - b['date']);
  newState.currentHeaderSorted = 'date';
  newState.way = 'descending';
  return newState;
}
