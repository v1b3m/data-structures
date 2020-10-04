/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/Grid.css';
import Linear from '../components/Queues/Linear';
import Circular from '../components/Queues/Circular';
import { Setpage } from '../types';

interface props {
  setPage: Setpage;
}

const Queues: React.FC<props> = ({ setPage }) => (
  <div className="section group">
    <div className="col span_1_of_2">
      <Linear setPage={setPage} />
    </div>

    <div className="col span_1_of_2">
      <Circular />
    </div>
  </div>
);

export default Queues;
