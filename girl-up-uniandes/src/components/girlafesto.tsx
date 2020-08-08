import React from 'react';
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, createMuiTheme, responsiveFontSizes, Typography, withWidth, isWidthUp, ThemeProvider} from '@material-ui/core';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  text : {
    color : theme.palette.warning.main,
    fontSize: '10vw',
    flex: 1,
    overflowWrap: 'anywhere',
  }, 
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
  root : {
    justifyContent: 'center',
    alignItems : 'center',
    marginTop : '10',
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
    return 2;
  }
  return 2;
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function AboutUs(width: any) {
  const classes = useStyles(); 
  return (
  <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
    <div className={classNames("container-fluid", classes.containerFix)}>
      <Grid
        container
        spacing={calculateSpacing(width)}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          className={classes.cardWrapper}
          data-aos="zoom-in-up"
        >
          <div  style={{padding:25,margin: 'auto'}}>
          <Grid item xs={12} sm container direction="column" justify="center" alignItems="center">
        <ThemeProvider theme={theme}>    
        <TextLoop className={classes.text}>
        <Typography  variant="h5" className={classes.text}>Soy una mujer</Typography>
        <Typography  variant="h5" className={classes.text}>Inteligente, Capaz</Typography>
        <Typography  variant="h5" className={classes.text} >Seria, Entusiasta</Typography>
        <Typography  variant="h5" className={classes.text} >Aventurera, Curiosa</Typography>
        <Typography  variant="h5" className={classes.text} >Y Fuerte.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo sigo. Yo lidero.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo aprendo. Yo enseño.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi ropa.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi pelo.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi música.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi mente.</Typography>
        <Typography  variant="h5" className={classes.text}>Tengo una voz que habla</Typography>
        <Typography  variant="h5" className={classes.text}>Ideas para defender</Typography>
        <Typography  variant="h5" className={classes.text}>Y un mundo que mejorar.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo importo, y ella también.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella puede verse diferente.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella puede hablar diferente.</Typography>
        <Typography  variant="h5" className={classes.text}>Pero ella es como yo.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella es una mujer.</Typography>
        <Typography  variant="h5" className={classes.text}>Y juntas, nos levantaremos.</Typography>
        <Typography  variant="h5" className={classes.text}>Porque aunque somos fuertes</Typography>
        <Typography  variant="h5" className={classes.text}>Juntas somos más fuertes.</Typography>
        <Typography  variant="h5" className={classes.text}>Y juntas, nuestras voces</Typography>
        <Typography  variant="h5" className={classes.text}>cambiarán el mundo.</Typography>
        <Typography  variant="h5" className={classes.text}>Tú ves una chica</Typography>
        <Typography  variant="h5" className={classes.text}>Nosotras vemos el futuro.</Typography>
      </TextLoop>
      </ThemeProvider>
          </Grid>
          </div>
        </Grid>
        </Grid>
    </div>
  </div>
);
}

export default (withWidth()(AboutUs));

/*export default function Girlafesto() {
  const classes = useStyles();
    return (
      <div style={{flexGrow: 1}}>
      <Container className={classes.root}>
      <Grid item className={classes.root} xs={12} sm={12} md={12} lg={12} xl={12}>
        <ThemeProvider theme={theme}>
        <TextLoop>
        <Typography  variant="h5" className={classes.text}>Soy una mujer</Typography>
        <Typography  variant="h5" className={classes.text}>Inteligente, Capaz</Typography>
        <Typography  variant="h5" className={classes.text} >Seria, Entusiasta</Typography>
        <Typography  variant="h5" className={classes.text} >Aventurera, Curiosa</Typography>
        <Typography  variant="h5" className={classes.text} >Y Fuerte.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo sigo. Yo lidero.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo aprendo. Yo enseño.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi ropa.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi pelo.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi música.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi mente.</Typography>
        <Typography  variant="h5" className={classes.text}>Tengo una voz que habla</Typography>
        <Typography  variant="h5" className={classes.text}>Ideas para defender</Typography>
        <Typography  variant="h5" className={classes.text}>Y un mundo que mejorar.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo importo, y ella también.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella puede verse diferente.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella puede hablar diferente.</Typography>
        <Typography  variant="h5" className={classes.text}>Pero ella es como yo.</Typography>
        <Typography  variant="h5" className={classes.text}>Ella es una mujer.</Typography>
        <Typography  variant="h5" className={classes.text}>Y juntas, nos levantaremos.</Typography>
        <Typography  variant="h5" className={classes.text}>Porque aunque somos fuertes</Typography>
        <Typography  variant="h5" className={classes.text}>Juntas somos más fuertes.</Typography>
        <Typography  variant="h5" className={classes.text}>Y juntas, nuestras voces</Typography>
        <Typography  variant="h5" className={classes.text}>cambiarán el mundo.</Typography>
        <Typography  variant="h5" className={classes.text}>Tú ves una chica</Typography>
        <Typography  variant="h5" className={classes.text}>Nosotras vemos el futuro.</Typography>
      </TextLoop>
      </ThemeProvider>
      </Grid>
      </Container>
      </div>
    );
  }
  */