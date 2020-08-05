import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Blog from './pages/blog';
import Causes from './pages/causes';
import Events from './pages/events';
import Girlupuniandes from './pages/girlupuniandes';
import Mentorship from './pages/mentorship';
import Whoweare from './pages/whoweare';
import Landing from './pages/landing';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#DA4A9A",
    },
  },
});

function App() {
  return (

    <BrowserRouter>
        <div>
          <Switch>
          <ThemeProvider theme={theme}>
            <Route path='/' exact component={Landing} />
            <Route path='/causas' exact component={Causes} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/nosotras' exact component={Whoweare} />
            <Route path='/mentoria' exact component={Mentorship} />
            <Route path='/girlup' exact component={Girlupuniandes} />
            <Route path='/eventos' exact component={Events} />
            </ThemeProvider>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
