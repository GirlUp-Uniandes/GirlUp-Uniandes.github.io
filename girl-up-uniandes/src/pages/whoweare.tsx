import React from 'react'
import "../css/styles.css";
import classNames from "classnames";
import UnderConstruction from '../images/UnderConstruction.gif';
import Logotipo2 from '../images/Logotipo2.png';
import NavBar from '../components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid,Typography, makeStyles, withWidth} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerFix: {
  }
}));

function EnConstruccion(width:any){
    const classes = useStyles(); 
    return(
        <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid container direction="column" justify="center" alignItems="center" style={{position:'absolute'}}
>     
            <Grid item>
                <img style={{marginTop:90}} src={Logotipo2} width="300" alt="GirlUp"/>
            </Grid>
            <Grid item>
                <Typography variant="h4" component="h5" style={{textAlign: "center", color:"#ED0095",  fontWeight: "bold"}}>
                    Página en construcción 
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h6" style={{textAlign: "center", color:"#12B7EF", marginTop: 2}}>
                    Muy pronto podrás saber más de nosotras...
                </Typography>
            </Grid>
            <Grid item>
                <img src={UnderConstruction} width="650" alt="Muy Pronto" />
            </Grid>
        </Grid>
        </div>
        </div>
    );
}

function WhoWeAre() {
    return (
      <div>
        <NavBar/>
        < EnConstruccion/>
      </div>
    );
  }
  
  export default (withWidth()(WhoWeAre));