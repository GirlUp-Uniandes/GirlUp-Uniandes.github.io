import React from 'react'
import "../css/styles.css";
import Error from '../images/Error.gif';
import Logotipo2 from '../images/Logotipo2.png';
import Fondo2 from '../images/Fondo3.png';

import NavBar from '../components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid,Typography, makeStyles, Button, useMediaQuery,useTheme} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    banner: {
    backgroundImage: `url(${Fondo2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    maxWidth: "100%",
  }
}));

function EnConstruccion(width:any){
    const classes = useStyles(); 
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <div >
        <Grid container direction="column" justify="center" alignItems="center" className = {classes.banner}style={{marginTop: 65}}>
            <Grid item xs={12} sm  style={{marginLeft:40,marginRight:40}}>
                    <Grid item style={{marginTop:40}}>
                        <Button href="https://girlup.org/">
                            <img alt="complex" src={Logotipo2} style={{ width:500, textAlign: "center", marginLeft: 'auto', marginRight: 'auto',display: 'block',maxWidth: '100%',maxHeight: '100%'}}/>
                        </Button>
                    </Grid>
            </Grid>
            <Grid item xs={12}sm>
                <Grid item container direction="column" justify="center" alignItems="center" style={{marginLeft: 10, marginRight: 10}}>
                    <Grid item style={{marginBottom:30}}>
                        <img alt="complex" src={Error} style={{maxWidth: '80%',minWidth: '50%', textAlign: "center"}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

export default function Error() {
    return (
      <div>
        <NavBar/>
        < EnConstruccion/>
      </div>
    );
  }
  




