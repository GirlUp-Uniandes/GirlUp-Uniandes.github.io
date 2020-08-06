import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import posts from '../posts/posts.json'
import BlogCard from '../components/blog/BlogCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
