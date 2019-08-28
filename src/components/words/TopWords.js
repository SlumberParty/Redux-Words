import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getWords, getFirstWords, getTopWordsByTerm } from '../../selectors/wordsSelectors';
import PropTypes from 'prop-types';
import { updateSearchTerm } from '../../actions/wordsActions';

class TopWords extends PureComponent {
  static propTypes = {
    words: PropTypes.array.isRequired,
    getFirstWords: PropTypes.array.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    getTopWordsByTerm: PropTypes.array.isRequired
  }

  render() {
    const firstWords = this.props.getTopWordsByTerm.map((word, i) => {
      return <li key={i}>{word}</li>
    });
    
    return ( 
      <>
      <h1>im dying</h1>
      <h1>{firstWords}</h1>
      <ul>{getTopWordsByTerm}</ul>
      </>
      //update to display words that match searchTerm
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('AHH', state);
  return {
    words: getWords(state),
    getFirstWords: getFirstWords(state, props.match.params.count),
    getTopWordsByTerm: getTopWordsByTerm(state, props.match.params.count)
  };
};


const mapDispatchToProps = (dispatch) => ({
  setSearchTerm(searchTerm) {
    dispatch(updateSearchTerm(searchTerm));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopWords);
 
