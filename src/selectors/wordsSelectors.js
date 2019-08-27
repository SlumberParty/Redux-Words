export const getWords = state => state.dictionary;

export const getFirstWords = state => {
  getWords(state).slice(0, 1000),
  //paramater that returns a certain number of words
}
