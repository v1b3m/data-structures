/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, IconButton } from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';
import { screens, Setpage, drawerType } from '../types';
import DrawerList from './DrawerList';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

interface props {
  handleDrawerClose: () => void;
  open: boolean;
  setPage: Setpage;
  selected: screens;
  variant: drawerType;
  closeDrawer: () => void;
}

const PersistentDrawerLeft: React.FC<props> = ({
  handleDrawerClose,
  open,
  setPage,
  selected,
  variant,
  closeDrawer,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant={variant}
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

      <DrawerList
        selected={selected}
        setPage={setPage}
        closeDrawer={closeDrawer}
      />
    </Drawer>
  );
};

export default PersistentDrawerLeft;
