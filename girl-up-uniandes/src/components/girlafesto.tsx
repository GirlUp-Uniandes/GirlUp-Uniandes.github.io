import React from 'react';
import TextLoop from "react-text-loop";
import { makeStyles } from '@material-ui/core/styles';
import {ThemeProvider, Grid, createMuiTheme, responsiveFontSizes, Typography, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text : {
    color : theme.palette.warning.main,
    minWidth : "50%",
    maxWidth : "100%",
    fontSize: '6vm',
    flex: 1,
  }, 
  root : {
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    flexWrap : 'wrap',
    marginTop : '10',
  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Girlafesto() {
  const classes = useStyles();
    return (
      <div style={{flexGrow: 1}}>
      <Container className={classes.root}>
      <Grid className={classes.root} item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ThemeProvider theme={theme}>
        <TextLoop>
        <Typography  variant="h5" className={classes.text}>Soy una mujer</Typography>
        <Typography  variant="h5" className={classes.text}>Inteligente, Capaz</Typography>
        <Typography  variant="h5" className={classes.text} >Seria, Entusiasta</Typography>
        <Typography  variant="h5" className={classes.text} >Aventurera, Curiosa</Typography>
        <Typography  variant="h5" className={classes.text} >Y Fuerte.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo sigo. Yo lidero.</Typography>
        <Typography  variant="h5" className={classes.text}>Yo aprendo. Yo enseño.</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi ropa</Typography>
        <Typography  variant="h5" className={classes.text}>Cambio mi pelo</Typography>
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
        <Typography  variant="h5" className={classes.text}>Nosotros vemos el futuro.</Typography>
      </TextLoop>
      </ThemeProvider>
      </Grid>
      </Container>
      </div>
    );
  }