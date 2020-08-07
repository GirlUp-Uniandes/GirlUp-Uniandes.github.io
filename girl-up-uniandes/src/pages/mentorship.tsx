import React from 'react'
import "../css/styles.css";
import UnderConstruction from '../images/UnderConstruction.gif';
import Logotipo2 from '../images/Logotipo2.png';
import NavBar from '../components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid,Typography} from '@material-ui/core';

function EnConstruccion(){
    return(
        <Grid container direction="column" justify="center" alignItems="center">    
            
            <Grid item>
                <img style={{marginTop:30}} src={Logotipo2} width="300" alt="GirlUp"/>
            </Grid>
            <Grid item>
                <Typography variant="h4" component="h5" style={{textAlign: "center", color:"#ED0095",  fontWeight: "bold"}}>
                    Página en construcción 
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2, marginBottom: 2}}>
                    Muy pronto podrás saber más de mentoría...
                </Typography>
            </Grid>
            <Grid item>
                <img src={UnderConstruction} width="650" alt="Muy Pronto" />
            </Grid>
        </Grid>
    );
}

export default function Landing() {
    return (
      <div>
        <NavBar/>
        < EnConstruccion/>
      </div>
    );
  }
  


