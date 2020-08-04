import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Landing from './pages/landing';


function App() {
  return (

    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/"  component={Landing} />
            
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
