import React from 'react';

import { Route, IndexRoute } from 'react-router';

import Blog from './pages/blog';
import Causes from './pages/causes';
import Landing from './pages/landing';
import Events from './pages/events';
import Girlupuniandes from './pages/girlupuniandes';
import Mentorship from './pages/mentorship';
import Whoweare from './pages/whoweare';

export default (
    <Route path="/" component={Landing}>
      <IndexRoute component={Landing} />
      <Route path="/some/where" component={Causes} />
      <Route path="/some/otherpage" component={Blog} />
      <Route path="/some/otherpage" component={Whoweare} />
      <Route path="/some/otherpage" component={Mentorship} />
      <Route path="/some/otherpage" component={Girlupuniandes} />
      <Route path="/some/otherpage" component={Events} />
    </Route>
  );