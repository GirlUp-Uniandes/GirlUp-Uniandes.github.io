import React from "react";
import classNames from "classnames";
import {Grid, Typography, isWidthUp, withWidth, Paper, makeStyles, Button} from "@material-ui/core";
import Causa1 from '../images/Causa1.png'
import Causa2 from '../images/Causa2.png'
import Causa3 from '../images/Causa3.png'
import Causa4 from '../images/Causa4.png'


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
  noDecoration: {
    textDecoration: "none !important",
    outline: "none !important",
    '&:hover': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  }
}));

function calculateSpacing(width: any) {
  if (isWidthUp("lg", width)) {
    return 5;
  }
  if (isWidthUp("md", width)) {
    return 4;
  }
  if (isWidthUp("sm", width)) {
    return 3;
  }
  return 2;
}

function CausasLocales(width: any) {
    const classes = useStyles(); 
    return (
    <div className="lg-p-top" style={{ marginTop:30, marginBottom:60, backgroundColor: "#FFFFFF" }}>
      <Typography variant="h4" component="h5" style={{textAlign: "center", color:"#ED0095", marginTop: 30, marginBottom: 30, fontWeight: "bold"}} >
          Nuestras Causas
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <Paper  style={{padding:25,margin: 'auto',backgroundColor:"#FFF7FC"}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="Proyectos Locales" src={Causa1} style={{ width: 'auto',height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#ED0095", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Proyectos Locales
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2" style={{textAlign: "justify"}}>
                  Queremos empoderar a la mujer colombiana, a través de proyectos que muestren lo mejor 
                  de cada una de nosotras. Desde la Universidad, y de cara a nuestra ciudad y a nuestro país, 
                  queremos que cada niña y cada mujer logre cumplir sus sueños y metas. 
                </Typography>
              </Grid>
              <Grid item >
                <Button variant="contained" color="primary" className={classes.noDecoration} style={{marginTop: 20}}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <Paper  style={{padding:25,margin: 'auto',backgroundColor:"#FFF7FC"}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="STEAM" src={Causa2} style={{ width: 'auto',height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  STEAM
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2" style={{textAlign: "justify"}}>
                  Sabemos que con Ciencia, Tecnología, Ingeniería, Arte y Matemáticas (STEAM, por sus siglas en inglés)
                  podemos transformar el mundo y nuestra comunidad. Aprendiendo y enseñando estas apasionantes áreas del conocimiento, 
                  queremos que la mujer pueda cambiar su vida y su realidad.  
                </Typography>
              </Grid>
              <Grid item >
                <Button variant="contained" color="secondary" className={classes.noDecoration}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <Paper  style={{padding:25,margin: 'auto',backgroundColor:"#FFF7FC"}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="Gender Equality" src={Causa3} style={{ width: 'auto',height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#5B3367", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Equidad de genero
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2" style={{textAlign: "justify"}}>
                  A pesar de ser más de la mitad de la población mundial, no hay ningún lugar en el planeta en que las niñas y mujeres vivan en total igualdad y equidad. <br />
                  ¡Ayúdanos a poner nuestro granito de arena para cambiar esta realidad en nuestro país y en el mundo!
                </Typography>
              </Grid>
              <Grid item >
              <Button variant="contained" className={classes.noDecoration} style={{backgroundColor:"#5B3367",color:"#ffffff", marginTop:20}}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <Paper  style={{padding:25,margin: 'auto',backgroundColor:"#FFF7FC", maxHeight:"100%"}}>
            <Grid item xs={12} sm container direction="column" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                 <img alt="Educación" src={Causa4} style={{ width: 'auto',height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#FAC8C8", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  Educación
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2" style={{textAlign: "justify"}}>
                  Sabemos que la educación es una de las armas más poderosas para combatir la pobreza y la desigualdad. 
                  Además, educar a una niña es educar a una nación entera. <br/>
                  ¡Ayúdanos a transformar la realidad de nuestras niñas y mujeres colombianas con la educación!
                </Typography>

              </Grid>
              <Grid item >
                <Button variant="contained" style={{backgroundColor:"#FAC8C8", marginTop: 20}}>
                  Ver más...
                </Button>
              </Grid>
            </Grid>
          </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default (withWidth()(CausasLocales));
