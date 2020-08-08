import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from "react-router-dom";

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
  pill: {
    color: theme.palette.warning.main,
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

export default function Blog({id, writer, email, title, image, description, date, tags}:Props) {
  const classes = useStyles(); 
  const handleClick = () => {
    window.location.href="/#causas";
  };

  return (
    <Card className={classes.root}>
      <Link to={"blog/"+id} className={classes.noDecoration} tabIndex={-1}>
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
          <Link to={"blog/"+id} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> leer más...</span>
          </Link>
        </Typography>
        <div style={{alignItems: "center"}}>
        { tags.map(tag => {
          if(tag) {
            return(
              <Chip
              variant="outlined" 
              size="small" 
              className={classes.pill} 
              onClick={handleClick}
              label={tag}
              clickable
              />
            );
          }
          return("");
        })}
      <Typography variant="body2" color="textSecondary" component="h6">
          Escrito por: {writer}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          {email}
        </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}