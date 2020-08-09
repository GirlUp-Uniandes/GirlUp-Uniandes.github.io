import React from 'react'
import "../css/styles.css";
import {Typography, Button, Grid, Link, Hidden, makeStyles, useMediaQuery,useTheme} from '@material-ui/core';
import AboutUs from "../components/aboutus";
import NavBar from '../components/navbar';
import CausasLocales from '../components/localcauses'

import BannerImg from "../images/Powerful.gif"
import Logotipo from "../images/Logotipo2.png"
import BlueShape from "../images/BlueShape.png"
import Friends from "../images/Friends.png"
import PowerfulAmico from "../images/Powerful-amico.png"
import UNFLogo from '../images/UNFLogo.png'
import GirlUpLoguito from '../images/GirlUpLoguito.png'
import Background1 from "../images/Background1.png"

import TextLoop from "react-text-loop";
require('typeface-raleway');


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${BlueShape})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    maxWidth: "100%",
  },backgroundQuienesSomos: {
    backgroundImage: `url(${Background1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    maxWidth: "100%"
  },
  typography: {
    fontFamily: 'Raleway',
  }
}));

export default function Landing() {
  const classes = useStyles(); 
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));

  function PrimerBanner(){
    return(
      <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 100}}>
        <Grid item xs={12} sm  style={{marginLeft:40,marginRight:40}}>
          <Grid item container direction="column" justify="center" alignItems="center" className={classes.banner}>
            <Grid item >
              <Button href="https://girlup.org/">
               <img alt="complex" src={Logotipo} style={{ width:500, textAlign: "center", marginLeft: 'auto', marginRight: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Button>
            </Grid>
            <Grid item >
              <Typography variant={isMobileOrTablet ? "h6" : "h5"} color="secondary" display="block" style={{fontWeight: "bold", textAlign:'center',marginLeft: 20, marginRight: 20 }} >
                Únete a GirlUp tan solo llenando tus datos, pronto estaremos en contacto contigo!
              </Typography>
            </Grid>
            <Grid item >
              <Button variant="contained" target="_blank" color="primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=fAS9-kj_KkmLu4-Yufucynr0Ske4AbBPrSHUPJVzvD9UNzY2UUxMWkRISEVLN0dHMkRCVDZOWjNYSS4u" style={{margin:15}} >
                ¡Llena tus datos!
              </Button>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12}sm>
        <Grid item container direction="column" justify="center" alignItems="center"  spacing = {2} style={{marginLeft: 10, marginRight: 10}}>
          <Grid item >
            <img alt="complex" src={BannerImg} style={{maxWidth: '100%',minWidth: '50%', textAlign: "center"}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
  }


  function TextoAnimado(){
    return(
    <div style={{flexGrow: 1, marginTop: 30}}>
      <Grid item container direction="column" justify="center" alignItems="center" spacing = {2} style={{ marginRight: 10,marginBottom:50}}>
        <Grid item style={{marginTop: 30}}>
          <Typography className={classes.typography} variant="h4" component="h5" style={{textAlign: "center", color:"#12B7EF"}} >
              SOY UNA MUJER
          </Typography>
        </Grid>
        
        <Grid item  style={{marginBottom: 30}}>
          <TextLoop >
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Inteligente, Capaz</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}    >Seria, Entusiasta</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}    >Aventurera, Curiosa</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}    >Y Fuerte.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que sigue y que lidera.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que aprende, que enseña.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Con una voz que habla</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Llena de ideas para defender</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que importa, y ella también.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >y ella es como yo.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "subtitle1" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Somos mujeres y juntas, nos levantaremos.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "subtitle1" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >y aunque soy fuerte, juntas somos más fuertes.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}    >Somos mujeres</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "body2" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >y juntas nuestras voces cambiarán el mundo.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "subtitle1" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Tú ves una chica, nosotras vemos el futuro.</Typography>
          </TextLoop>
        </Grid>
      </Grid>
    </div>);
  }

  function QuienesSomos(){
    return(
      
      <Grid container direction="column" justify="center" alignItems="center"className={classes.backgroundQuienesSomos} >
        <Grid item container direction="row" justify="center" alignItems="center"  >
          <Grid item sm >
            <Hidden xsDown>
              <img alt="complex" src={PowerfulAmico} style={{maxWidth: '100%',minWidth: '40%', textAlign: "center", marginLeft:'20%',marginRight:'20%'}}/>
            </Hidden>
          </Grid>
          <Grid item sm >
            <Link target="_blank" href={"https://girlup.org/"}>
              <img alt="complex" src={GirlUpLoguito} style={{ display: 'block',maxWidth: '30%',minWidth: '10%', marginTop:50, marginLeft:'30%',marginRight:'30%'}}/>
            </Link>
            <Typography className={classes.typography} variant="h5" color = "primary" component="h6" style={{textAlign: "justify",margin:60}} >
              Girl Up es una iniciativa de la Fundación de Naciones Unidas que busca el empoderamiento de la mujer alrededor del mundo. 
              En alianza con la ONU, luchamos por las niñas, construimos programas que las ayudan en su desarrollo, y creamos una 
              comunidad que aboga por generar un cambio positivo en el mundo. <br/>
              Girl Up visualiza un mundo en el que cada mujer y cada niña pueda alcanzar su máximo potencial,   
              liderando grandes sueños que lleven a mejores comunidades y a países más fuertes. <br/>
              De aquí, su lema: "Uniendo a las mujeres para cambiar el mundo".<Link target="_blank" href={"https://girlup.org/"} color = "secondary" > Leer más...</Link>
            </Typography>
            
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center" alignItems="center"  >
          <Grid item sm >
            <Link target="_blank" href={"https://unfoundation.org/"}>
              <img alt="complex" src={UNFLogo} style={{ display: 'block',maxWidth: '50%',minWidth: '30%', marginTop:50, marginLeft:'30%',marginRight:'30%'}}/>
            </Link>
            <Typography className={classes.typography} variant="h5" component="h6" color = "secondary" style={{textAlign: "justify",margin:60}} >
              La Fundación de Naciones Unidas une el trabajo de la ONU con el de otras organizaciones 
              alrededor del mundo, encaminando el vigor y la experiencia de empresas y ONGs, para ayudar a las Naciones Unidas 
              a abordar cuestiones como el cambio climático, la salud global, la paz, la seguridad, el empoderamiento de la mujer, la erradicación 
              de la pobreza, y el acceso a la energía, entre otros. <br />
              Esto, apoyando programas de UNICEF, ACNUR (UNHCR), FPNU (UNFPA) y ONU Mujeres que promuevan el desarrollo de los países.  
              <Link target="_blank" href={"https://unfoundation.org/"} color = "primary" > Leer más...</Link>
            </Typography>
          </Grid>
          <Grid item sm >
            <Hidden xsDown>
              <img alt="complex" src={Friends} style={{maxWidth: '100%',minWidth: '40%', textAlign: "center", marginLeft:'20%',marginRight:'20%'}}/>
            </Hidden>
          </Grid>
        </Grid>
      </Grid> 
        
  );}

  return (
    <div style={{ overflowX:"hidden"}}>
      <NavBar/>
      <PrimerBanner/>
      <TextoAnimado/>
      <QuienesSomos/>
      <CausasLocales/>
    </div>
  );
}
  