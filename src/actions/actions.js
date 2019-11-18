export const SEARCH_TEXT = 'SEARCH_TEXT';

export const getWeater = (searchText) => ({
  type: SEARCH_TEXT,
  payload: searchText
});
