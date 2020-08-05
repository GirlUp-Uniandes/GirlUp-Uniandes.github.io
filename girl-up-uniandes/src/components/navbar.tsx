import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{Nav, Navbar} from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Inicio</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>    
        </Navbar>
    </div>
  );
}
