import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import JokePage from './JokePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/joke/:type'>
        <JokePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
