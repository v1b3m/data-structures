import React, { useState } from 'react';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Content from './components/Content';

import { screens } from './types';

const useStyles = makeStyles(() => ({ root: { display: 'flex' } }));

// eslint-disable-next-line no-shadow

function App() {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState<screens>(screens.Home);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleGoHome = () => {
    setPage(screens.Home);
  };

  return (
    <div className={classes.root}>
      <CssBaseline>
        <AppBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          handleGoHome={handleGoHome}
        />
        <Drawer open={open} handleDrawerClose={handleDrawerClose} />
        <Content open={open} page={page} setPage={setPage} />
      </CssBaseline>
    </div>
  );
}

export default App;
