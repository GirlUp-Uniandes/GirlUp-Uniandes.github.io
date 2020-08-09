import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, Button, Hidden, IconButton, makeStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import NavigationDrawer from "../components/navdrawer";
import Logotipo from '../images/LogoFondoRosado.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color: 'white',
  },
  menuButton:{
    backgroundColor: theme.palette.primary.main,
    outline: 'none !important',
    '&:hover': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  },
  brandText: {
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important",
    outline: "none !important",
    '&:hover': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  },
}));

function NavBar() {
  const classes = useStyles(); 
  const [selectedTab] = useState("");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  
  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const menuItems = [
    {
      link: "/",
      name: "Inicio",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/nosotras",
      name: "Nosotras",
      icon: <PeopleIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <CreateIcon className="text-white" />
    },
    {
      link: "/causas",
      name: "Causas",
      icon: <EmojiEventsIcon className="text-white" />
    },
    {
      link: "/eventos",
      name: "Eventos",
      icon: <EventAvailableIcon className="text-white" />
    },
    {
      link: "/mentoria",
      name: "Mentoría",
      icon: <SchoolIcon className="text-white" />
    },
    {
      link: "/contactanos",
      name: "Contáctanos",
      icon: <PhoneIcon className="text-white" />
    }
  ];
  return (
    <div>
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link to={"/"}>
            <img src={Logotipo} width="40" alt="GirlUp"/>
            </Link>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                onClick={handleMobileDrawerOpen}
                aria-label="Navegar"
                className={classes.menuButton}
              >
                <MenuIcon className="text-white" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                        className={classes.menuButton}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={isMobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

export default (memo(NavBar));




/*import React, { useState } from 'react'
import "../css/styles.css";
import {Navbar,Nav} from 'react-bootstrap'
import Logotipo from '../images/LogoFondoRosado.png';


export default function NavBar(){
  return(
    <Navbar sticky="top" variant="dark" className="navBar" >
        <Navbar.Brand href="/">
            <img src={Logotipo} width="40" alt="GirlUp"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/#/blog">Blog</Nav.Link>
                <Nav.Link href="/#/eventos">Eventos</Nav.Link>
                <Nav.Link href="/#/causas">Causas</Nav.Link>
                <Nav.Link href="/#/mentoria"> Mentorias</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

*/