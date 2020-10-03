import React from 'react';
import Card from '../Card';

export default function Purpose() {
  return (
    <Card
      title="Why did we create this website?"
      caption="Honestly, we've not yet found out why!"
      body="This website will give you a good foundation on data structures
      that's needed to understand the complexity of enterprise level
      applications and need of algorithms and data structures."
      image="black-1072366_640.jpg"
      imageCaption="blank black board"
      share={false}
      learnMore={false}
    />
  );
}
