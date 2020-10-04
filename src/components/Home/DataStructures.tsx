/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card';

import { Setpage, screens } from '../../types';

interface props {
  setPage: Setpage;
}

const DataStructures: React.FC<props> = ({ setPage }) => (
  <Card
    title="What the heck are data structures?"
    caption="Excellent question."
    body="Data structures are the programmatic way of storing data or
    organizing data in a computer so that it can be used effectively. As
    we'll see throughout this session, different scenarios will
    require different data structures in order to function as smoothly
    as possible."
    image="background-2462431_640.jpg"
    imageCaption="An amazing abstract image"
    moreInfo
    moreInfoText="LEARN MORE"
    onClickMoreInfo={() => setPage(screens.DataStructures)}
  />
);

export default DataStructures;
