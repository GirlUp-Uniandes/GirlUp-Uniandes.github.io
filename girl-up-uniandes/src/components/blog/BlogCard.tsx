import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  title : {
    transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.complex,
        easing: theme.transitions.easing.easeInOut
      }),
      cursor: "pointer",
      color: theme.palette.common.black,
      "&:hover": {
        color: theme.palette.primary.dark
      },
      "&:active": {
        color: theme.palette.primary.dark
      }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  link: {
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
  avatar: {
    backgroundColor: "#ED0095",
  },
  pillArray: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  pill: {
    margin: theme.spacing(0.5),
    color: theme.palette.warning.dark,
  },
  noOutline: {
    outline: 'none !important',
    '&:hover': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  }
}));

interface Props {
    id:number;
    writer:string; 
    email:string; 
    title:string;
    image:string;
    description:string;
    date:string;
    tags:string[];
}

interface MyProps {
  option:string;
}

function Share({option}:MyProps){
    if(option==="Compartir en Facebook") {
          return(<div><FacebookIcon style={{color:'#3B5998'}}/></div>);
    }
    else if(option==="Compartir por WhatsApp") {
           return(<div><WhatsAppIcon style={{color:'#25D366'}}/></div>); 
    }
    else if(option==="Compartir por Email") {
           return(<div><MailIcon /></div>);
    }
    else if(option==="Compartir en LinkedIn") {
          return(<div><LinkedInIcon style={{color:'#0E76A8'}}/></div>);
    }
    else if(option==="Compartir en Twitter") {
        return(<div><TwitterIcon style={{color:'#00ACEE'}}/></div>);
     }
     else {
       return(<div></div>);
    }
}

export default function Blog({id, writer, email, title, image, description, date, tags}:Props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption] = useState("");

  const handleClick = () => {
    window.location.href="/#/causas";
  };
  const handleClick1 = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const itemHeight = 216;
  const isOpen = Boolean(anchorEl);
  const options = ["Compartir en Facebook", "Compartir por WhatsApp", "Compartir por Email", 
  "Compartir en LinkedIn", "Compartir en Twitter"];
  const titleShare = "Girl Up Uniandes";
  const descriptionShare = "¡Encontré un post muy inspirador en Girl Up Uniandes! \n" + description + "\n¡Míralo aquí!: " +  window.location.href + "/" + id + "/";
  const site = window.location.href + "/" + id + "/";
  return (
    <Card className={classes.root}>
      <Link to={"/blog/"+id} className={classes.noDecoration} tabIndex={-1}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {writer.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={date}
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
          <Link to={"/blog/"+id} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> leer más...</span>
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          <b>Escrito por: </b> {writer}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          <b>Email: </b> {email}
          </Typography>
      </CardContent>
      <div className={classes.pillArray}>
        { tags.map(tag => {
          if(tag) {
            return(
              <Chip
              size="small" 
              color= "primary"
              className={classes.pill} 
              onClick={handleClick}
              label={tag}
              clickable
              style={{backgroundColor:'#FAC8C8'}}
              />
            );
          }
          return("");
        })}
       </div>
      <CardActions disableSpacing>
        <IconButton 
        aria-label="share" 
        aria-owns={isOpen ? "long-menu" : undefined} 
        aria-haspopup="true" 
        onClick={handleClick1}
        className={classes.noOutline}
        >
          <ShareIcon />
        </IconButton>
        <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: itemHeight,
                  width: 300,
                },
              }}
              disableScrollLock
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === selectedOption}
                  onClick={() => {
                    //selectOption(option);
                    if(option==="Compartir en Facebook") {
                      window.location.href=`https://facebook.com/sharer/sharer.php?u=${site}`;
                    }
                    else if(option==="Compartir en Twitter") {
                      window.location.href = `https://twitter.com/intent/tweet/?text=${descriptionShare}&amp;url=${site}`;
                    }
                    else if(option==="Compartir por Email") {
                      window.location.href = `mailto:?subject=${titleShare}&amp;body=${site}`;
                    }
                    else if(option==="Compartir en LinkedIn") {
                      window.location.href = `https://www.linkedin.com/shareArticle?mini=true&amp;url=${site}&amp;title=${titleShare}&amp;summary=${descriptionShare}&amp;source=${site}`;
                    }
                    else if(option==="Compartir por WhatsApp") {
                      window.location.href = `whatsapp://send?text=${descriptionShare}`;
                    }
                    else {
                      window.location.href = `/#error`;
                    }
                  }}
                >
                <ListItemIcon>
                  <Share option={option}/>
                </ListItemIcon>
                  {option}
                </MenuItem>
              ))}
            </Menu>
      </CardActions>
    </Card>
  );
}