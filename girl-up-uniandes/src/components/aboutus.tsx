import React from "react";
import classNames from "classnames";
import {Grid, Typography, isWidthUp, withWidth, makeStyles, Link} from "@material-ui/core";
import UNFLogo from '../images/UNFLogo.jpg'
import GirlUpLoguito from '../images/GirlUpLoguito.png'
import Girlafesto from './girlafesto'
const useStyles = makeStyles((theme) => ({
    containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  },
  linkUNF: {
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
  linkGirlUp: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
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

function calculateSpacing(width: any) {
  if (isWidthUp("lg", width)) {
    return 5;
  }
  if (isWidthUp("md", width)) {
    return 4;
  }
  if (isWidthUp("sm", width)) {
    return 2;
  }
  return 2;
}

function AboutUs(width: any) {
    const classes = useStyles(); 
    return (
    <div>
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
        >
            <Grid
            item
            sm={1}
            lg={1}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          />
          <Grid
            item
            xs={12}
            sm={5}
            lg={5}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <div  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
            <Link href={"https://girlup.org/"} target={"_blank"} className={classes.noDecoration} tabIndex={-1}>
              <Grid item>
                 <img alt="complex" src={GirlUpLoguito} style={{ width:'80%', margin: 'auto', display: 'block',maxWidth: '100%',maxHeight: '100%', paddingTop:'20%', paddingBottom:'11%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#ED0095", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Girl Up
                </Typography>
              </Grid>
              </Link>
              <Grid item >
                <Typography variant="body1" style={{textAlign: "justify", fontSize: '20px'}}>
                  Girl Up es una iniciativa de la Fundación de Naciones Unidas que busca el empoderamiento de la mujer alrededor del mundo. 
                  En alianza con la ONU, luchamos por las niñas, construimos programas que las ayudan en su desarrollo, y creamos una 
                  comunidad que aboga por generar un cambio positivo en el mundo. <br/>
                  Girl Up visualiza un mundo en el que cada mujer y cada niña pueda alcanzar su máximo potencial,   
                  liderando grandes sueños que lleven a mejores comunidades y a países más fuertes. <br/>
                  De aquí, su lema: "Uniendo a las mujeres para cambiar el mundo".
                  <Link href={"https://girlup.org/"} target={"_blank"} className={classes.noDecoration} tabIndex={-1}>
                        <span className={classes.linkGirlUp}> Leer más...</span>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            </div>
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={5}
            lg={5}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div  style={{padding:25,margin: 'auto'}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
            <Link href={"https://unfoundation.org/"} target={"_blank"} className={classes.noDecoration} tabIndex={-1}>
              <Grid item>
                 <img alt="complex" src={UNFLogo} style={{ margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Fundación de Naciones Unidas
                </Typography>
              </Grid>
              </Link>
              <Grid item >
                <Typography variant="body1" style={{textAlign: "justify", fontSize: '20px'}}>
                  La Fundación de Naciones Unidas une el trabajo de la ONU con el de otras organizaciones 
                  alrededor del mundo, encaminando el vigor y la experiencia de empresas y ONGs, para ayudar a las Naciones Unidas 
                  a abordar cuestiones como el cambio climático, la salud global, la paz, la seguridad, el empoderamiento de la mujer, la erradicación 
                  de la pobreza, y el acceso a la energía, entre otros. <br />
                  Esto, apoyando programas de UNICEF, ACNUR (UNHCR), FPNU (UNFPA) y ONU Mujeres que promuevan el desarrollo de los países.  
                  <Link href={"https://unfoundation.org/"} target={"_blank"} className={classes.noDecoration} tabIndex={-1}>
                        <span className={classes.linkUNF}> Leer más...</span>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </div>
          </Grid>
          </Grid>
          <Grid
            item
            sm={1}
            lg={1}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          />
      </div>
    </div>
    <Girlafesto />
    </div>
  );
}

export default (withWidth()(AboutUs));
