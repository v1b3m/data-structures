import React, { useState } from 'react';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Content from './components/Content';

const useStyles = makeStyles(() => ({ root: { display: 'flex' } }));

function App() {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState<'home'>('home');

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline>
        <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
        <Drawer open={open} handleDrawerClose={handleDrawerClose} />
        <Content open={open} page={page} />
      </CssBaseline>
    </div>
  );
}

export default App;
