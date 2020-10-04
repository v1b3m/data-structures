/* eslint-disable consistent-return */
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

class CircularQueue {
  queue: number[];

  arr: number[];

  maxLen: number;

  head: number;

  tail: number;

  constructor(length: number) {
    this.queue = [];
    this.arr = [];
    this.maxLen = length;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: number) {
    if (this.head === this.tail) {
      if (this.queue[this.head] === undefined) {
        this.queue[this.head] = element;
      } else {
        this.queue[this.tail + 1] = element;
        this.tail += 1;
      }
    } else if (this.head !== this.tail) {
      const nextIndex = (this.tail + 1) % this.maxLen;
      if (this.queue[nextIndex] === undefined) {
        this.queue[nextIndex] = element;
        this.tail = nextIndex;
      } else {
        return 'Queue is full.';
      }
    }
  }

  dequeue() {
    if (this.queue[this.head] !== undefined) {
      const oldIndex = this.head;
      this.queue.splice(this.head, 1);
      this.head = (oldIndex + 1) % this.maxLen;
    } else {
      return 'Nothing to remove !!!';
    }
  }

  allElements() {
    this.arr.splice(0, this.arr.length);
    for (let i = 0; i < this.queue.length; i += 1) {
      if (this.queue[i] !== undefined) {
        this.arr.push(this.queue[i]);
      }
    }
    return this.arr;
  }

  len() {
    return this.arr.length;
  }
}

let queue: CircularQueue = new CircularQueue(1);

const Linear = () => {
  const [queueValue, setQueueValue] = useState<number>();
  const [topMost, setTopMost] = useState<number>();
  const [length, setLength] = useState<number>();
  const [maxLength, setMaxLength] = useState<number>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQueueValue(parseInt(event.target.value));
  };

  const handleChangeMaxLength = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMaxLength(parseInt(event.target.value));
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
    if (queue) {
      setLength(queue.len());
    }
  };

  const handleAllElements = () => {
    $('#all-elements').text(() => `${queue.allElements().toString()}`);
  };

  const updateQueueView = () => {
    $('#demo').text(() => `[${queue.allElements().toString()}]`);
  };

  const handleCreateQueue = (num: number) => {
    queue = new CircularQueue(num);
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
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              variant="outlined"
              color="primary"
              size="small"
              onChange={handleChangeMaxLength}
            />
            <Button
              text="Create Queue"
              onClick={() => {
                if (maxLength) {
                  handleCreateQueue(maxLength);
                }
              }}
            />
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
        <ReactEmbedGist gist="KengoWada/57cb8fc08c4b3553c3b3c4ba0ed2f8ce" />
      </div>
    </div>
  );
};

export default Linear;
