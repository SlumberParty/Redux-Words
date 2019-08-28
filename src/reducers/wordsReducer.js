// import { UPDATE_FORM_ID } from '
import words from '../data/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/wordsActions.js';

const initialState = {
  dictionary: words,
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

// sample action payload
// {
//   type; 'UPDATE_SEARCH_TERM',
//   payload: 'chicken-noodle-soup'
// }


if (action.type === 'UPDATE_SEARCH_TERM') {
  return {...state, searchTerm: action.payload}
};

