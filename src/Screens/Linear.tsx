/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable radix */
/* eslint-disable react/self-closing-comp */
import React, { ChangeEvent, useState } from 'react';
import $ from 'jquery';
import ReactEmbedGist from 'react-embed-gist';
import { TextField, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import '../styles/Stacks.css';
import '../styles/Grid.css';

import Button from '../components/Stacks/Button';

class Queue {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  enqueue(element: number) {
    return this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  tailElement() {
    return this.queue[this.queue.length - 1];
  }

  size() {
    return this.queue.length;
  }

  allElements() {
    return this.queue;
  }
}

let queue: Queue = new Queue();

const Linear = () => {
  const [queueValue, setQueueValue] = useState<number>();
  const [topMost, setTopMost] = useState<number>();
  const [length, setLength] = useState<number>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQueueValue(parseInt(event.target.value));
  };

  const handleEnqueue = () => {
    if (queueValue !== undefined) {
      queue.enqueue(queueValue);
      updateQueueView();
    }
  };

  const handleDequeue = () => {
    queue.dequeue();
    updateQueueView();
  };

  const handlePeek = () => {
    setTopMost(queue.allElements()[0]);
  };

  const handlelength = () => {
    setLength(queue.size());
  };

  const handleAllElements = () => {
    $('#all-elements').text(() => `${queue.allElements().toString()}`);
  };

  const updateQueueView = () => {
    $('#demo').text(() => `[${queue.allElements().toString()}]`);
  };

  const handleCreateQueue = () => {
    queue = new Queue();
    return updateQueueView();
  };

  return (
    <div className="section group">
      <div className="col span_1_of_2">
        <div className="controls">
          <div className="control-item live-view">
            <Typography
              id="demo"
              color="secondary"
              variant="h4"
              align="center"
            ></Typography>
          </div>

          <div className="control-item">
            <Button text="Create Queue" onClick={handleCreateQueue} />
          </div>

          <div className="push control-item">
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              variant="outlined"
              color="primary"
              size="small"
              onChange={handleChange}
            />
            <Button text="Enqueue" onClick={handleEnqueue} />
          </div>

          <div className="control-item">
            <Button text="Dequeue" onClick={handleDequeue} />
          </div>

          <div className="control-item row">
            <Button text="Peek" onClick={handlePeek} />
            <ArrowForwardIosIcon />
            <Typography variant="h6">{topMost}</Typography>
          </div>

          <div className="control-item row">
            <Button text="Length" onClick={handlelength} />
            <ArrowForwardIosIcon />
            <Typography variant="h6">
              {length ? `${length} elements` : ''}
            </Typography>
          </div>

          <div className="control-item row">
            <Button text="All Elements" onClick={handleAllElements} />
            <ArrowForwardIosIcon />
            <Typography id="all-elements" variant="h6"></Typography>
          </div>
        </div>
      </div>

      <div className="col span_1_of_2">
        <Typography variant="h5" color="textSecondary">
          Code
        </Typography>
        <ReactEmbedGist gist="KengoWada/21e3e6ff1581ac9bd57f573cd4b12c23" />
      </div>
    </div>
  );
};

export default Linear;
