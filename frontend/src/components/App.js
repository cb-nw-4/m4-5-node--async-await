import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './MainPage';
import JokePage from './JokePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/joke/:type'>
        <JokePage />
      </Route>
      <Route exact path='/joke'>
        <MainPage />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
