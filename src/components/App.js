import React from 'react';
import TopWords from '../components/words/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchWords from '../containers/SearchWords';

export default function App() {
  return (
    <Router>
      <SearchWords />
      <Switch>
        <Route exact path="/" component={TopWords} />
        <Route path="/words/:count" component={TopWords} />
      </Switch>
    </Router>
  );
} 


