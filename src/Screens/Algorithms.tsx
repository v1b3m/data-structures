/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Input from '../components/Algorithms/Input';
import Output from '../components/Algorithms/Output';
import Definite from '../components/Algorithms/Definite';
import Finite from '../components/Algorithms/Finite';
import Correct from '../components/Algorithms/Correct';

import '../styles/Grid.css';
import { drawerWidth } from '../components/Drawer';

// eslint-disable-next-line no-shadow
enum FiniteIDs {
  one = 'one',
  two = 'two',
}

const Algorithms = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const toggleGrid = (w: number) =>
    w - drawerWidth >= 1300 ? 'col span_1_of_4' : 'col span_1_of_3';

  const toggleFinite = (id: FiniteIDs, w: number) => {
    if (id === FiniteIDs.one) {
      return w - drawerWidth >= 1300 ? 'col span_1_of_4' : 'hide';
    }
    return w - drawerWidth >= 1300 ? 'hide' : 'col span_1_of_3';
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
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Every Algorithm must satisfy the following properties:
      </Typography>

      <Typography align="center" gutterBottom>
        An algorithm is a finite set of instructions or logic written in order
        to accomplish a certain predefined task. An algorithm is not the
        complete code or program, it is just the core solution of a problem,
        which can be expressed either as an informal high level description as
        pseudocode or using a flowchart.
      </Typography>

      <div className="section group">
        <div className={toggleGrid(width)}>
          <Input />
        </div>

        <div className={toggleGrid(width)}>
          <Output />
        </div>

        <div className={toggleGrid(width)}>
          <Definite />
        </div>

        <div className={toggleFinite(FiniteIDs.one, width)}>
          <Finite />
        </div>
      </div>
      <div className="section group">
        <div className={toggleFinite(FiniteIDs.two, width)}>
          <Finite />
        </div>

        <div className={toggleGrid(width)}>
          <Correct />
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
