/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  List,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  GitHub,
  Info,
  Timeline,
  AccountTree,
  List as Lists,
  ListAlt,
  LowPriority,
  HorizontalSplit,
  Repeat,
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

interface props {
  handleDrawerClose: () => void;
  open: boolean;
}

const PersistentDrawerLeft: React.FC<props> = ({ handleDrawerClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button key="Recursion">
            <ListItemIcon>
              <Repeat />
            </ListItemIcon>
            <ListItemText primary="Recursion" />
          </ListItem>

          <ListItem button key="Stacks">
            <ListItemIcon>
              <HorizontalSplit />
            </ListItemIcon>
            <ListItemText primary="Stacks" />
          </ListItem>

          <ListItem button key="Queues">
            <ListItemIcon>
              <LowPriority />
            </ListItemIcon>
            <ListItemText primary="Queues" />
          </ListItem>

          <ListItem button key="Lists">
            <ListItemIcon>
              <Lists />
            </ListItemIcon>
            <ListItemText primary="Lists" />
          </ListItem>

          <ListItem button key="Arrays">
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Arrays" />
          </ListItem>

          <ListItem button key="Trees">
            <ListItemIcon>
              <AccountTree />
            </ListItemIcon>
            <ListItemText primary="Trees" />
          </ListItem>

          <ListItem button key="Graphs">
            <ListItemIcon>
              <Timeline />
            </ListItemIcon>
            <ListItemText primary="Graphs" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button key="GitHub">
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>

          <ListItem button key="About us">
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default PersistentDrawerLeft;
