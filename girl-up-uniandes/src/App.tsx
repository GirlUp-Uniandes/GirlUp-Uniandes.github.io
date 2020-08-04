import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blog from './pages/blog';
import Causes from './pages/causes';
import Events from './pages/events';
import Girlupuniandes from './pages/girlupuniandes';
import Mentorship from './pages/mentorship';
import Whoweare from './pages/whoweare';
import Landing from './pages/landing';


function App() {
  return (

    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/"  component={Landing} />
            <Route path="/causas" exact component={Causes} />
            <Route path="/blog" component={Blog} />
            <Route path="/nosotras" component={Whoweare} />
            <Route path="/mentoria" component={Mentorship} />
            <Route path="/girlup" component={Girlupuniandes} />
            <Route path="/eventos" component={Events} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
