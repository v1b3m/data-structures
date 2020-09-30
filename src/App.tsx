import React, { useState } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <CssBaseline>
        <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />
        <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      </CssBaseline>
    </div>
  );
}

export default App;
