/* eslint-disable react/prop-types */
import React from 'react';
import { screens, Setpage } from '../../types';
import Card from '../Card';

interface props {
  setPage: Setpage;
}

const Linear: React.FC<props> = ({ setPage }) => (
  <div>
    <Card
      title="Linear Queue"
      caption=""
      body="A small program to demonstrate how a queue works such as adding  an element(Enqueue) and removing an element(Dequeue)"
      image="trekking-299000_640.jpg"
      imageCaption="https://pixabay.com/photos/trekking-hiking-group-alpine-line-299000/"
      moreInfo
      moreInfoText="GO TO IMPLEMENTATION"
      onClickMoreInfo={() => setPage(screens.Linear)}
    />
  </div>
);

export default Linear;
