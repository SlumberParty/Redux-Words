export const getWords = state => state.dictionary;

export const getFirstWords = state => {
  getWords(state).slice(0, 1000),
};

//export const getTopWordsByTerm = state => {
  // getWords(state).filter()
//}