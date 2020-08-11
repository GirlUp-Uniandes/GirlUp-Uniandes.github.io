
import React from 'react';
import NavBar from './navbar'
import {useMediaQuery,useTheme} from '@material-ui/core'

interface Props {
    src: string | any;
    height: string;
    width: string;
    title: string;

  }

function FormInscripcion({src, height, width, title}:Props) {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return ( 
    <div style={{backgroundColor: "#FFF7FC"}}>
        <NavBar />
        <iframe title={title} src={src} height={height} width={width} 
        style={isMobileOrTablet ? {border:"none", maxWidth:"100%", maxHeight:"100%", backgroundColor: "#FFF7FC", marginTop: 100} : 
        {border:"none", maxWidth:"100%", maxHeight:"100%", backgroundColor: "#FFF7FC", marginTop: 65}} 
        allowFullScreen={true}
        />      
    </div>
    );
  }

export default function Inscripcion(){
    return(<FormInscripcion 
    src={"https://forms.office.com/Pages/ResponsePage.aspx?id=fAS9-kj_KkmLu4-Yufucynr0Ske4AbBPrSHUPJVzvD9UNzY2UUxMWkRISEVLN0dHMkRCVDZOWjNYSS4u"}
     height={"2000px"} width={"100%"} title={"Inscripción Girl Up Uniandes"} />);
}