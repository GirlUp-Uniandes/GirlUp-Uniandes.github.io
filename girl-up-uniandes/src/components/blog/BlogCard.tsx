import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
        color: theme.palette.secondary.dark
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
      color: theme.palette.primary.dark
    }
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface Props {
    id:number;
    writer:string; 
    email:string; 
    title:string;
    image:string;
    description:string;
    date:string
}

export default function Blog({id, writer, email, title, image, description, date}:Props) {
  const classes = useStyles(); 

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
          <Link to={""+id} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> read more...</span>
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          {writer}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          {email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


/*import React from "react";
import { Link } from "react-router-dom";
import { Theme, WithStyles } from '@material-ui/core/styles';
import format from "date-fns/format";
import classNames from "classnames";
import { Typography, Card, Box, withStyles } from "@material-ui/core";

const styles = (theme: Theme) => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8
  },
  card: {
    boxShadow: theme.shadows[2]
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark
    },
    "&:active": {
      color: theme.palette.primary.dark
    }
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark
    }
  }
});

interface Props {
    classes : object;
    url : string;
    title : string; 
    date: number;
    snippet:string;
    src:string;
}

type MyProps = Props & WithStyles<typeof styles>;

function BlogCard(props : MyProps) {
  const { classes, url, src, date, title, snippet } = props;
  return (
    <Card className={classes.card}>
      {src && (
        <Link to={url} tabIndex={-1}>
          <img src={src} className={classes.img} alt="" />
        </Link>
      )}
      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          {format(new Date(), 'yyyy-MM-dd')}
        </Typography>
        <Link
          to={url}
          className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span className={classes.title}>{title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {snippet}
          <Link to={url} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> read more...</span>
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(BlogCard);
*/