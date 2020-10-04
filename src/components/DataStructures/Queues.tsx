/* eslint-disable react/prop-types */
import React from 'react';
import { screens, Setpage } from '../../types';
import Card from '../Card';

interface props {
  setPage: Setpage;
}

const Queues: React.FC<props> = ({ setPage }) => (
  <Card
    title="Queues"
    caption=""
    body="This data structure follows the First In First Out(FIFO) prinicipal i.e. the first element added to the queue is the first to be removed"
    image="bunny-3830669_640.jpg"
    imageCaption="https://pixabay.com/photos/bunny-business-businessmen-career-3830669/"
    moreInfo
    moreInfoText="GO TO IMPLEMENTATION"
    onClickMoreInfo={() => setPage(screens.Queues)}
  />
);

export default Queues;
