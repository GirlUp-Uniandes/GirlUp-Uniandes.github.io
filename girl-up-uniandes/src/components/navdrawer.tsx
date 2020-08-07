import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText, Drawer, 
    IconButton, Typography, withWidth, isWidthUp, Toolbar, makeStyles} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    closeIcon: {
    marginRight: theme.spacing(0.5)
  },
  headSection: {
    width: 200
  },
  blackList: {
    backgroundColor: theme.palette.primary.main,
    height: "100%"
  },
  litem: {
      backgroundColor: theme.palette.primary.main,
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  space : {
      spacing: 0,
      backgroundColor: theme.palette.primary.main,
  }
}));

interface Props {
    width: any;
    open: boolean;
    onClose: any;
    menuItems: any;
    anchor: any;
    selectedItem: string;
}

function NavigationDrawer({width, open, onClose, anchor, menuItems, selectedItem,}:Props) {
 const classes = useStyles(); 


  useEffect(() => {
    window.onresize = () => {
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.headSection} disableGutters={true}>
        <ListItem className={classes.litem}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
            margin: 0
          }}
          disableGutters={true}
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose} aria-label="Close Navigation">
              <CloseIcon className="text-white" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map((element:any) => {
            return (
              <Link
                key={element.name}
                to={element.link}
                className={classes.noDecoration}
                onClick={onClose}
              >
                <ListItem
                  button
                  selected={selectedItem === element.name}
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            );
        })}
      </List>
    </Drawer>
  );
}


export default withWidth()((NavigationDrawer));
