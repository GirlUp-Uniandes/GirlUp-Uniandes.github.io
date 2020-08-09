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
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
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
          Proyectos Locales
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
                 <img alt="complex" src={Causa2} style={{ width: 300,height: 300,margin: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
              </Grid>
              <Grid item >
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2, marginBottom: 2, fontWeight: "bold"}}>
                  STEAM
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
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <Paper  style={{padding:25,margin: 'auto',backgroundColor:"#FFF7FC"}}>
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
    </div>
  );
}

export default (withWidth()(CausasLocales));
