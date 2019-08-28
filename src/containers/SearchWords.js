import { connect } from 'react-redux';
import SearchForm from '../components/words/SearchForm';
import { getTopWordsByTerm } from '../selectors/wordsSelectors';
import { updateSearchTerm } from '../actions/wordsActions';

const mapStateToProps = state => ({
  text: state.dictionary.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
