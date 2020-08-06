import React, { useState } from 'react'
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