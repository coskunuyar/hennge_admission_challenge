export const SORT_MAILS = 'sort-mails';
export const FILTER_MAILS = 'filter-mails';

export function sortAccordingTo(accordingTo) {
  return { type: SORT_MAILS, accordingTo };
}

export function filterMails(startDate, endDate) {
  return { type: FILTER_MAILS, startDate, endDate };
}
