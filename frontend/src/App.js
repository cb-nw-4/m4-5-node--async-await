import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Joke from './Joke.js';

const App= ()=> {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/joke/:type'>
            <Joke/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
