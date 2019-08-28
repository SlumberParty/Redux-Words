import React from 'react';
import TopWords from '../components/words/TopWords';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopWords} />
        <Route path="/words/:count" component={TopWords} />
      </Switch>
    </Router>
  );
} 


