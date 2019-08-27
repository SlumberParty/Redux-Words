import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getWords, getFirstWords } from '../../selectors/wordsSelectors';
import PropTypes from 'prop-types';

class TopWords extends PureComponent {
  static propTypes = {
    words: PropTypes.array.isRequired
  }

  render() {
    return ( 
      <h1>im dying</h1>
    );
  }
}

const mapStateToProps = state => ({
  words: getWords(state),
  getFirstWords: getFirstWords(state)
});

//put in a map dispatch to props and use the searchterm in it
//call an action, like set search term

export default connect(
  mapStateToProps,
)(TopWords);
 
