import React from 'react';
import "../css/styles.css";
import {Typography, Button, Grid, Link, Hidden, makeStyles, useMediaQuery,useTheme} from '@material-ui/core';
import NavBar from '../components/navbar';
import CausasLocales from '../components/localcauses'
import InstagramEmbed from 'react-instagram-embed';
import classNames from "classnames";
import TextLoop from "react-text-loop";

import BannerImg from "../images/Powerful.gif";
import Logotipo from "../images/Logotipo2.png";
import Logotipo3 from "../images/Logotipo3.png";
import TeamImg from "../images/Team.png";
import BlueShape from "../images/BlueShape.png";
import Friends from "../images/Friends.png";
import PowerfulAmico from "../images/Powerful-amico.png";
import UNFLogo from '../images/UNFLogo.png';
import GirlUpLoguito from '../images/GirlUpLoguito.png';
import Background1 from "../images/Background1.png";
import IGIcon from "../images/InstagramIcon.png";

import SingleLineGridList from "../components/gridlist";

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
  buttonLink: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: 'white',
      "&:hover": {
        color: 'white'
      }
    },
    blueLink: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.secondary.dark
      }
    },
    pinkLink: {
      transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.dark
      }
    }
}));

export default function Landing() {
  const classes = useStyles(); 
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));

  function PrimerBanner(){
    return(
      <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 100}}>
        <Grid item xs={12} sm  style={{marginLeft:20,marginRight:20}}>
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
              <Button className={classNames(classes.noDecoration, classes.buttonLink)} 
              variant="contained" color="primary" 
              href="/#inscripcion"
              style={{margin:15}} >
                ¡Llena tus datos!
              </Button>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12}sm>
      <Hidden xsDown>
          <Grid item container direction="column" justify="center" alignItems="center"  spacing = {2} style={{marginLeft: 10, marginRight: 10}}>
            <Grid item >
              <img alt="complex" src={BannerImg} style={{maxWidth: '100%',minWidth: '50%', textAlign: "center"}}/>
            </Grid>
          </Grid>
        </Hidden>
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
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}    >Fuerte.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que sigue y que lidera.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que aprende, que enseña.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Con una voz que habla</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "subtitle1" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Llena de ideas para defender</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Que importa, y ella también.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "h5" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Y ella es como yo.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "subtitle1" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Y todas juntas, nos levantaremos.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "body2" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Y, aunque soy fuerte, juntas somos más fuertes.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "body2" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Y, juntas, nuestras voces cambiarán el mundo.</Typography>
            <Typography  color="primary" variant={isMobileOrTablet ? "body2" : "h3"} className={classes.typography} style={{fontWeight: "bold",overflow: "visible"}}   >Tú ves una chica, nosotras vemos el futuro.</Typography>
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
              <img alt="complex" src={PowerfulAmico} style={{maxWidth: '100%',minWidth: '40%', textAlign: "center", marginRight:'5%', marginLeft:'10%', alignSelf: "center", alignItems: 'center'}}/>
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
              De aquí, su lema: "Uniendo a las mujeres para cambiar el mundo".<Link target="_blank" href={"https://girlup.org/"} className={classes.blueLink}  color = "secondary" > Leer más...</Link>
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
              <Link target="_blank" href={"https://unfoundation.org/"} color = "primary" className={classes.pinkLink} > Leer más...</Link>
            </Typography>
          </Grid>
          <Grid item sm >
            <Hidden xsDown>
              <img alt="complex" src={Friends} style={{maxWidth: '100%',minWidth: '40%', textAlign: "center",  marginRight:'10%', marginLeft:'5%', alignSelf: "center", alignItems: 'center'}}/>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>         
  );}

  function GirlUpUniandes(){
    return(
      <div style={{backgroundColor:"#ED0095"}}>
        <Grid container direction="row" justify="center" alignItems="center" style={{marginTop: 65, marginBottom:100}}>
            
            <Grid item xs={12}sm>
              <Hidden xsDown>
                <Grid item container direction="column" justify="center" alignItems="center" style={{marginLeft: 10, marginRight: 10}}>
                    <Grid item style={{marginBottom:30}}>
                        <img alt="complex" src={TeamImg} style={{maxWidth: '100%',minWidth: '50%', textAlign: "center"}}/>
                    </Grid>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item xs={12}sm>
                <Grid item container direction="column" justify="center" alignItems="center" style={{marginLeft: 10, marginRight: 10}}>
                    <Grid item style={{marginTop:60}}>
                        <img alt="complex" src={Logotipo3} style={{maxWidth: '40%',minWidth: '30%', textAlign: "center", marginLeft:"30%",marginRight:"30%"}}/>
                    </Grid>
                    <Typography className={classes.typography} variant="h5" component="h6"  style={{color:"#FAC8C8",textAlign: "justify",margin:60}} >
                      Con Girl Up Uniandes queremos generar un impacto en nuestra comunidad uniandina, en nuestra ciudad, Bogotá y en nuestro país, Colombia. 
                      Descubre nuestro programa de mentorías para niñas de colegio, estudiantes de primer semestre y estudiantes a punto de graduarse de la U. 
                      Ayúdanos a promover la educación, porque educar a una niña, es educar a todo un país. 
                      ¡Apóyanos a llevar STEAM (ciencia, tecnología, ingeniería, arte y matemáticas) a todos los rincones de nuestro hermoso país y del mundo!  
                    </Typography>
                </Grid>
            </Grid>
            
        </Grid>
      </div>
    );
  }

  function RedesSociales(){
    return(
      <Grid container direction="column" justify="center" alignItems="center" className={classes.backgroundQuienesSomos} style={{marginTop: 25}} >
        <Grid item container direction="row" justify="center" alignItems="center"  >
          <Grid item lg={6}sm >
            <Grid item container direction="column" justify="center" alignItems="center" >
              <Grid item sm >
              <img alt="IG" src={IGIcon} style={{maxWidth: '50%',minWidth: '20%', marginBottom:10, marginLeft:'25%' , marginRight:'10%',textAlign: "center"}}/>
              </Grid>
              <Grid item sm >
                <Typography className={classes.typography} color="primary" variant="h4" component="h5" style={{textAlign: "center"}} >
                  Siguenos en instagram!
                </Typography>
              </Grid>
              <Grid item sm >
                <Link href="https://www.instagram.com/girlupuniandes/">
                <Typography className={classes.typography} color="secondary" variant="h4" component="h5" style={{textAlign: "center"}} >
                  @girlupuniandes
                </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3}sm >
              <InstagramEmbed
                url='https://www.instagram.com/p/BkDiUWWFZCs/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
          </Grid>
          <Grid item lg={3} sm >
              <InstagramEmbed
                url='https://www.instagram.com/p/Bl_GEjrHVxh/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
          </Grid>
        </Grid>
        
      </Grid>  
    );
  }
  return (
    <div style={{ overflowX:"hidden"}}>
      <NavBar/>
      <PrimerBanner/>
      <GirlUpUniandes/>
      <TextoAnimado/>
      <QuienesSomos/>
      <CausasLocales/>
      <SingleLineGridList/>
      <RedesSociales/>
    </div>
  );
}
  