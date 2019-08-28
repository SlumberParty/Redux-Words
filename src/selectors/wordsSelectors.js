export const getWords = state => state.dictionary.dictionary;

export const getFirstWords = (state, count = 1000) => {
  //debugger
  console.log(count, 'fuuuuck')
  return getWords(state).slice(0, count)
};

export const getTopWordsByTerm = (state, count) => {
  return getFirstWords(state, count).filter(word => word.includes(state.dictionary.searchTerm));
}