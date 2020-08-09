import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Typography, Card, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
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
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark
    }
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark
    }
  }
}));

interface Props {
    id: number;
    date: string; 
    title: string;
    description:string;
}

function SmallBlogCard({id, date, title, description } : Props) {
  const classes = useStyles(); 
  return (
    <Card className={classes.card}>
      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
        <Link
          to={"/blog/" + id}
          className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span className={classes.title}>{title}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {description}
          <Link to={"/blog/" + id} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> Leer más...</span>
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}



export default (SmallBlogCard);
