import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getWords, getFirstWords } from '../../selectors/wordsSelectors';
import PropTypes from 'prop-types';
import { UPDATE_SEARCH_TERM, updateSearchTerm } from '../../actions/wordsActions';

class TopWords extends PureComponent {
  static propTypes = {
    words: PropTypes.array.isRequired,
    setSearchTerm: PropTypes.func.isRequired
  }

  render() {
    return ( 
      <h1>im dying</h1>
      //update to display words that match searchTerm
    );
  }
}

const mapStateToProps = (state, props) => ({
  words: getWords(state),
  getFirstWords: getFirstWords(state, props.match.params.count)
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm(searchTerm) {
    dispatch(updateSearchTerm(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopWords);
 
