/* eslint-disable react/prop-types */
import React from 'react';
import { Setpage, screens } from '../../types';
import Card from '../Card';

interface props {
  setPage: Setpage;
}

const Algorithms: React.FC<props> = ({ setPage }) => (
  <Card
    title="What about algorithms?"
    caption="These are algos with rythm."
    body="An algorithm is an unambiguous specification of how to solve a class of
      problems. Algorithms can perform calculation, data processing and
      automated reasoning tasks. The concept of Algorithms dates back to Greek
      mathmaticians such as the Euclids Algorithm."
    image="neo-urban-1808082_640.jpg"
    imageCaption="code on a laptop"
    moreInfo
    moreInfoText="LEARN MORE"
    onClickMoreInfo={() => setPage(screens.Algorithms)}
  />
);

export default Algorithms;
