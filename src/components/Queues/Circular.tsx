import React from 'react';
import Card from '../Card';

const Circular = () => (
  <div>
    <Card
      title="Circular Queue"
      caption=""
      body="This is a linear data structure in which the operations are performed based on FIFO(First In First Out) principle ad the last postition is connected back to the first position to make a circle"
      image="ferris-wheel-2575709_640.jpg"
      imageCaption="https://pixabay.com/photos/ferris-wheel-amusement-park-ride-2575709/"
      moreInfo
      moreInfoText="GO TO IMPLEMENTATION"
    />
  </div>
);

export default Circular;
