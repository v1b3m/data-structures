/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

import Arrays from '../components/DataStructures/Arrays';
import Lists from '../components/DataStructures/Lists';
import Stacks from '../components/DataStructures/Stacks';
import Queues from '../components/DataStructures/Queues';
import Trees from '../components/DataStructures/Trees';
import Graphs from '../components/DataStructures/Graphs';
import { Setpage } from '../types';

import '../styles/Grid.css';
import { drawerWidth } from '../components/Drawer';

interface props {
  setPage: Setpage;
}

enum QueueIDs {
  one = 'one',
  two = 'two',
}

const DataStructures: React.FC<props> = ({ setPage }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const toggleGrid = (w: number) =>
    w - drawerWidth >= 1300 ? 'col span_1_of_4' : 'col span_1_of_3';

  const toggleQueues = (id: QueueIDs, w: number) => {
    if (id === QueueIDs.one) {
      return w - drawerWidth >= 1300 ? 'col span_1_of_4' : 'hide';
    }
    return w - drawerWidth >= 1300 ? 'hide' : 'col span_1_of_3';
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom color="textSecondary">
        DATA STRUCTURES
      </Typography>

      <Typography gutterBottom>
        In simple terms, data structures are structures programmed to store
        data, so that various operations can be carried out on it easily. It
        should be designed and implemented in a way that it reduces complexity
        and increases effeciency of a program.
      </Typography>

      <Typography variant="h4" gutterBottom color="textSecondary">
        TYPES OF DATA STRUCTURES
      </Typography>

      <Typography gutterBottom paragraph>
        As we have discussed above, anything that can store data can be referred
        to as a data structure, therefore integers, strings, booleans and many
        others are all data structures. These are known as Primitive Data
        Structures.
      </Typography>

      <Typography gutterBottom paragraph>
        Then there are also Abstract Data Structures, which are used to store
        large and connected data. Examples of these are:
      </Typography>

      <div className="section group">
        <div className={toggleGrid(width)}>
          <Arrays />
        </div>

        <div className={toggleGrid(width)}>
          <Lists />
        </div>

        <div className={toggleGrid(width)}>
          <Stacks setPage={setPage} />
        </div>

        <div className={toggleQueues(QueueIDs.one, width)}>
          <Queues setPage={setPage} />
        </div>
      </div>
      <div className="section group">
        <div className={toggleGrid(width)}>
          <Trees />
        </div>

        <div className={toggleGrid(width)}>
          <Graphs />
        </div>

        <div className={toggleQueues(QueueIDs.two, width)}>
          <Queues setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default DataStructures;
