import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, isWidthUp, withWidth, Typography, useMediaQuery, useTheme, Button} from '@material-ui/core';
import posts from '../posts/posts.json'
import BlogCard from '../components/blog/BlogCard'
import classNames from 'classnames';
import NavBar from '../components/navbar';

require('typeface-raleway');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    maxWidth: 1280,
    width: "100%"
  },
  wrapper: {
    minHeight: "60vh"
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  typography: {
    fontFamily: 'Raleway',
  },
  noDecorationButton: {
    textDecoration: "none !important",
    outline: "none !important",
    '&:hover': {
      outline: 'none',
    },
    '&:active': {
      outline: 'none',
    },
  },
}));

function getVerticalBlogPosts(width: any) {
  const gridRows = [[], [], []] as any;
  let rows : number;
  let xs : any;
  if (isWidthUp("md", width)) {
    rows = 3;
    xs = 4;
  } else if (isWidthUp("sm", width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  posts.forEach((blogPost, index) => {
    gridRows[index % rows].push(
      <Grid key={blogPost.id} item xs={12}>
        <Box mb={3}>
        <BlogCard key={blogPost.id} email={blogPost.email} title={blogPost.title}
                  writer={blogPost.writer} image={blogPost.image} description={blogPost.description}
                  date = {blogPost.date} id={blogPost.id} 
                  tags={blogPost.tags}/>
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element: any, index: any) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

interface Props {
  width : string;
}


function Blog({width} : Props) 
{
const classes = useStyles(); 
const theme = useTheme();
const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));

return (
  <div>
    <NavBar/>
    <Grid container>
    <Grid item xs={isMobileOrTablet ? "auto" : 3} style = {{marginTop:100}}></Grid>
    <Grid item xs={isMobileOrTablet ? 12 : 6} style = {{marginTop:100}}>
      <Typography className={classes.typography} variant="h4" component="h5" style={{textAlign: "center", color:"#5B3367"}} >
              <b>Nuestras historias</b>
      </Typography>
    </Grid>
    <Grid item xs={isMobileOrTablet ? 12 : 3} style = {isMobileOrTablet ? {marginTop:25} : {marginTop:100, marginRight:0}}>
    <Typography className={classes.typography} style={{textAlign: "center", color:"#12B7EF"}} >
        <Button variant="contained" href="/#enviar" className={classes.noDecorationButton} style={{backgroundColor:"#5B3367",color:"#ffffff"}}>
                  ¡Envíanos tu historia!
        </Button>
      </Typography>
      </Grid>
    </Grid>
    <Box style = {{marginTop:25}}
        display="flex"
        justifyContent="center"
        className={classNames(classes.wrapper, "lg-p-top")}
      >
        
        <div className={classes.blogContentWrapper}>
          <Grid container spacing={3}>
            {getVerticalBlogPosts(width)}
          </Grid>
        </div>
      </Box>
    </div>
    );
}

export default withWidth()(Blog);

/*
export default function Blog() 
{
const classes = useStyles(); 
return (
  <div className={classes.root}>
<Grid container spacing={10}> { 
   posts.map(posts => <Grid key={posts.id} item 
    xs={12} sm={6} md={4} lg={4} xl={3}>
  <BlogCard key={posts.id} email={posts.email} title={posts.title}
  writer={posts.writer} image={posts.image} description={posts.description}
  date = {posts.date} id={posts.id} />
</Grid> )}
</Grid> 
</div>);
}
*/