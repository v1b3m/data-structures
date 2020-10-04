import React, { useState, useEffect } from 'react';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Content from './components/Content';

import { screens, drawerType } from './types';

const useStyles = makeStyles(() => ({ root: { display: 'flex' } }));

// eslint-disable-next-line no-shadow

function App() {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState<screens>(screens.Home);
  const [width, setWidth] = useState(window.innerWidth);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const closeDrawer = () => {
    if (width <= 1200) {
      setOpen(false);
    }
  };

  const handleGoHome = () => {
    setPage(screens.Home);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline>
        <AppBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          handleGoHome={handleGoHome}
          drawerVariant={
            width <= 480 ? drawerType.temporary : drawerType.persistent
          }
        />
        <Drawer
          open={open}
          closeDrawer={closeDrawer}
          handleDrawerClose={handleDrawerClose}
          setPage={setPage}
          selected={page}
          variant={width <= 480 ? drawerType.temporary : drawerType.persistent}
        />
        <Content
          open={open}
          page={page}
          setPage={setPage}
          drawerVariant={
            width <= 480 ? drawerType.temporary : drawerType.persistent
          }
        />
      </CssBaseline>
    </div>
  );
}

export default App;
