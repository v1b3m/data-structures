/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { drawerWidth } from './Drawer';
import Home from '../Screens/Home';
import Algorithms from '../Screens/Algorithms';
import { Setpage, screens, drawerType } from '../types';
import DataStructures from '../Screens/DataStructures';
import Stacks from '../Screens/Stacks';
import Queues from '../Screens/Queues';
import Linear from '../Screens/Linear';
import Circular from '../Screens/Circular';

interface props {
  open: boolean;
  page: screens;
  setPage: Setpage;
  drawerVariant: drawerType;
}

const useStyles = makeStyles((theme) => ({
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  smallScreenContent: {
    padding: theme.spacing(3),
  },
}));

const Content: React.FC<props> = ({ open, page, setPage, drawerVariant }) => {
  const classes = useStyles();

  return (
    <main
      className={clsx({
        [classes.contentShift]: open && drawerVariant === drawerType.persistent,
        [classes.content]: drawerVariant === drawerType.persistent,
        [classes.smallScreenContent]: drawerVariant === drawerType.temporary,
      })}
    >
      <div className={classes.drawerHeader} />
      {page === screens.Home && <Home setPage={setPage} />}
      {page === screens.Algorithms && <Algorithms />}
      {page === screens.DataStructures && <DataStructures setPage={setPage} />}
      {page === screens.Stacks && <Stacks />}
      {page === screens.Queues && <Queues setPage={setPage} />}
      {page === screens.Linear && <Linear />}
      {page === screens.Circular && <Circular />}
    </main>
  );
};

export default Content;
