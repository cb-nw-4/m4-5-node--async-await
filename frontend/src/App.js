import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Joke from './Joke';

const App= async()=> {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/joke/:type">
            <Joke/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
