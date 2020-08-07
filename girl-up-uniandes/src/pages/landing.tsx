import React, { useState } from 'react'
import "../css/styles.css";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from '../images/Banner1.jpeg';
import Causa1 from '../images/Causa1.png';
import Causa2 from '../images/Causa2.png';
import Causa3 from '../images/Causa3.png';
import Causa4 from '../images/Causa4.png';
import NavBar from '../components/navbar';

import {Grid,Typography,Paper,Button} from '@material-ui/core';
import Girlafesto from "../components/girlafesto"

  function CarouselLanding() {
    return (
        <Carousel style={{flexGrow: 1, marginTop: 30, marginBottom: 30}}>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Banner1}
              alt='First slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>El titulo del mensaje</h3>
                
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Banner1}
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={Banner1}
              alt='Third slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                    <h3>El titulo del mensaje</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
function QuienesSomos(){
  return(
  <div style={{flexGrow: 1, marginTop: 30, marginBottom: 30}}>
    <Typography variant="h4" component="h5" style={{textAlign: "center", color:"#12B7EF", marginTop: 30, marginBottom: 30, fontWeight: "bold"}} >
          ¿Quienes Somos?
          <Girlafesto/>
      </Typography>
  </div>);

}

function Causas(){
  return(
    <div style={{flexGrow: 1, marginTop: 30, marginBottom: 30}}>
      <Typography variant="h4" component="h5" style={{textAlign: "center", color:"#ED0095", marginTop: 30, marginBottom: 30, fontWeight: "bold"}} >
          Proyectos Locales
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center" >
        <Grid item xs={3} lg={3} container >
          <Paper  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="complex" src={Causa1} style={{ width: 300,height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#ED0095", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Proyectos Locales
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
              </Grid>
              <Grid item >
                <Button variant="contained" color="primary">
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} lg={3} container >
          <Paper  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="complex" src={Causa2} style={{ width: 300,height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  STEAM for Social Good
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
              </Grid>
              <Grid item >
                <Button variant="contained" color="secondary">
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} lg={3} container >
          <Paper  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="complex" src={Causa3} style={{ width: 300,height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#5B3367", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Equidad de genero
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
              </Grid>
              <Grid item >
              <Button variant="contained" style={{backgroundColor:"#5B3367",color:"#ffffff"}}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} lg={3} container >
          <Paper  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="complex" src={Causa4} style={{ width: 300,height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#FAC8C8", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Educación
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
                <Typography variant="body2">
                  Blablablablablablablablablablabl
                </Typography>
              </Grid>
              <Grid item >
                <Button variant="contained" style={{backgroundColor:"#FAC8C8"}}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default function Landing() {
    return (
      <div >
        <NavBar/>
        <CarouselLanding />
        <QuienesSomos/>
        <Causas/>
        
      </div>
    );
  }
  