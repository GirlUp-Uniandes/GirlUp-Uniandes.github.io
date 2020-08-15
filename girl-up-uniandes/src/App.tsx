import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Blog from './pages/blog';
import Causes from './pages/causes';
import Events from './pages/events';
import Girlupuniandes from './pages/girlupuniandes';
import Mentorship from './pages/mentorship';
import Whoweare from './pages/whoweare';
import Landing from './pages/landing';
import ContactUs from './pages/contactus'
import BlogPost from './components/blog/BlogPost'
import Inscripcion from './components/inscripcion'
import SendPost from './components/blog/SendPost'

const theme = createMuiTheme({
  palette: {
    primary: {
      //rosado oscuro
      main: "#ED0095",
    },
    secondary: {
      //azul
      main: "#12B7EF",
    },
    warning: {
      //morado
      main: "#5B3367",
    },
    success: {
      //rosado claro
      main: "#FAC8C8",
    },
  },
});

function App() {
  return (

    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
          <ThemeProvider theme={theme}>
            <Route exact path='/' component={Landing} />
            <Route exact path='/causas' component={Causes} />
            <Route exact path='/contactanos' component={ContactUs} />
            <Route exact path='/blog' component={Blog} />
            <Route path='/blog/:id' component={BlogPost} />
            <Route exact path='/nosotras' component={Whoweare} />
            <Route exact path='/mentoria' component={Mentorship} />
            <Route exact path='/girlup' component={Girlupuniandes} />
            <Route exact path='/eventos' component={Events} />
            <Route exact path='/inscripcion' component={Inscripcion} />
            <Route exact path='/enviar' component={SendPost} />
            </ThemeProvider>
          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
