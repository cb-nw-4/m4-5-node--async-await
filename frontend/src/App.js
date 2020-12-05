import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Joke from './Joke.js';

const App= ()=> {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          
          <Route exact path='/joke/:type'>
            <Joke/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
