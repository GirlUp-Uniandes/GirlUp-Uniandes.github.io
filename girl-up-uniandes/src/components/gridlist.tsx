import React from 'react';
import { Theme, createStyles, makeStyles, useTheme} from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import images from '../data/images.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      maxWidth: '90%'
    },
    gridListTile: {
        maxHeight: "100%"
    }
  }),
);

export default function SingleLineGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root} >
      <GridList className={classes.gridList} cols={2.5} >
        {images.map((tile) => (
          <GridListTile key={tile.src} rows={isMobileOrTablet ? 1 : 2.5}>
            <img src={tile.src} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}