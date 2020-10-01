/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import DataStructures from './Home/DataStructures';
import Algorithms from './Home/Algorithms';
import WhyBother from './Home/WhyBother';
import Purpose from './Home/Purpose';

import './Grid.css';
import { drawerWidth } from './Drawer';

interface props {}

// eslint-disable-next-line no-shadow
enum PurposeIDs {
  one = 'one',
  two = 'two',
}

const Home: React.FC<props> = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const toggleGrid = (w: number) =>
    w - drawerWidth >= 1300 ? 'col span_1_of_4' : 'col span_1_of_3';

  const togglePurpose = (id: PurposeIDs, w: number) => {
    if (id === PurposeIDs.one) {
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
      <div className="section group">
        <div className={toggleGrid(width)}>
          <DataStructures />
        </div>

        <div className={toggleGrid(width)}>
          <Algorithms />
        </div>

        <div className={toggleGrid(width)}>
          <WhyBother />
        </div>

        <div className={togglePurpose(PurposeIDs.one, width)} id="purpose-1">
          <Purpose />
        </div>
      </div>

      <div>
        <div className={togglePurpose(PurposeIDs.two, width)} id="purpose-2">
          <Purpose />
        </div>
      </div>
    </div>
  );
};

export default Home;
