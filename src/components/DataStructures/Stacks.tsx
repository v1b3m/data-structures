/* eslint-disable react/prop-types */
import React from 'react';
import { screens, Setpage } from '../../types';
import Card from '../Card';

interface props {
  setPage: Setpage;
}

const Stacks: React.FC<props> = ({ setPage }) => (
  <Card
    title="Stacks"
    caption=""
    body="This is an abstract data type that serves as a collection of elements and follows the LIFO(Last In First Out) principal"
    image="beach-15712_640.jpg"
    imageCaption="https://pixabay.com/photos/beach-rocks-balance-blue-coastline-15712/"
    moreInfo
    moreInfoText="GO TO IMPLEMENTATION"
    onClickMoreInfo={() => setPage(screens.Stacks)}
  />
);

export default Stacks;
