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
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Landing} />
            <Route path={process.env.PUBLIC_URL + "/causas"} component={Causes} />
            <Route path={process.env.PUBLIC_URL + "/blog"} component={Blog} />
            <Route path={process.env.PUBLIC_URL + "/nosotras"} component={Whoweare} />
            <Route path={process.env.PUBLIC_URL + "/mentoria"} component={Mentorship} />
            <Route path={process.env.PUBLIC_URL + "/girlup"} component={Girlupuniandes} />
            <Route path={process.env.PUBLIC_URL + "/eventos"} component={Events} />
            </ThemeProvider>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
