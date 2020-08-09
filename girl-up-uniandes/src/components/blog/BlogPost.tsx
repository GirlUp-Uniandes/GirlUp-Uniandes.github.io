import React from 'react'
import {RouteComponentProps} from "react-router-dom";
import NavBar from "../navbar"
import classNames from "classnames";
import { Grid, Typography, Card, Box, makeStyles, Chip } from "@material-ui/core";
import SmallBlogCard from "./SmallBlogCard";
import ShareButton from "./ShareButton";
import ZoomImage from "./ZoomImage";
import posts from "../../posts/posts.json"
import Error from "../../pages/error"

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
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      marginRight: "auto"
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh"
  },
  img: {
    width: "100%",
    height: "auto"
  },
  card: {
    boxShadow: theme.shadows[4]
  },
  pillArray: {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  pill: {
    margin: theme.spacing(0.5),
    color: theme.palette.warning.dark,
  },
}));

type TParams = { id: string };

export default function BlogPost({ match }: RouteComponentProps<TParams>) {
  const classes = useStyles(); 
  const handleClick = () => {
    window.location.href="/#/causas";
  };
  var bp= posts.filter((blogPost: any)=> (blogPost.id + "") === match.params.id);
  var blogPost = bp[0];
  var otherArticles = posts.filter((blogPost: any)=> (blogPost.id + "") !== match.params.id);
  if(blogPost !== undefined)
  {
  return (
    <div className={classNames("container-fluid", classes.containerFix)}> 
    <NavBar />
    <Box
      className={classNames("lg-p-top", classes.wrapper)}
      display="flex"
      justifyContent="center"
      style={{marginTop: "100px"}}
    >
      <div className={classes.blogContentWrapper}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} lg={9} md={9}>
            <Card className={classes.card}>
              <Box pt={3} pr={3} pl={3} pb={2}>
                <Typography variant="h4">
                  <b>{blogPost.title}</b>
                </Typography>
                <Typography variant="h6">
                  <b>{blogPost.writer}</b>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {blogPost.date}
                </Typography>
                <div className={classes.pillArray}>
                { blogPost.tags.map(tag => {
                  if(tag) {
                  return(
                  <Chip
                    size="small" 
                    color= "primary"
                    className={classes.pill} 
                    onClick={handleClick}
                    label={tag}
                    style={{backgroundColor:'#FAC8C8'}}
                    clickable
                    />
                  );
                }
                return("");
              })}
              </div>
              </Box>
              <ZoomImage src={blogPost.image} alt={blogPost.title} />
              <Box p={3}>
                {blogPost.content}
                <Typography variant="h6" color="textSecondary">
                ¡Contáctame!: {blogPost.email}
                </Typography>
                <Box pt={2}>
                  <Grid spacing={1} container>
                    {["Facebook", "Twitter", "E-Mail", "WhatsApp", "LinkedIn"].map(
                      (type, index) => (
                        <Grid item key={index}>
                          <ShareButton
                            type={type}
                            title="Girl Up Uniandes"
                            description={"¡Encontré un post muy inspirador en Girl Up Uniandes! \n Míralo aquí: " +  window.location.href}
                          />
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" paragraph>
              Otros artículos
            </Typography>
            {otherArticles.map((blogPost:any) => (
              <Box key={blogPost.id} mb={3}>
                <SmallBlogCard
                  title={blogPost.title}
                  date={blogPost.date}
                  description={blogPost.description}
                  id={blogPost.id}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </div>
    </Box>
    </div>
  );
  }
  else{
  return(<Error/>);
  }
}