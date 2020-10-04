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

class Stack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  push(element: number) {
    this.stack.push(element);
  }

  pop() {
    this.stack.pop();
  }

  topMost() {
    return this.stack[this.stack.length - 1];
  }

  len() {
    return this.stack.length;
  }

  allElements() {
    return this.stack;
  }
}

const stack = new Stack();

const Stacks = () => {
  const [pushValue, setPushValue] = useState<number>();
  const [topMost, setTopMost] = useState<number>();
  const [length, setLength] = useState<number>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPushValue(parseInt(event.target.value));
  };

  const handlePush = () => {
    if (pushValue !== undefined) {
      stack.push(pushValue);
      updateStackView();
    }
  };

  const handlePop = () => {
    stack.pop();
    updateStackView();
  };

  const handleTopMost = () => {
    setTopMost(stack.topMost());
  };

  const handlelength = () => {
    setLength(stack.len());
  };

  const handleAllElements = () => {
    $('#all-elements').text(() => `${stack.allElements().toString()}`);
  };

  const updateStackView = () => {
    $('#demo').text(() => `[${stack.allElements().toString()}]`);
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
            <Button
              text="Create Stack"
              onClick={() => {
                $('#demo').text(() => '[]');
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
            <Button text="Push" onClick={handlePush} />
          </div>

          <div className="control-item">
            <Button text="Pop" onClick={handlePop} />
          </div>

          <div className="control-item row">
            <Button text="Top Most Element" onClick={handleTopMost} />
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
        <ReactEmbedGist gist="KengoWada/79d1a72e2669abe46a5b762bb38c417f" />
      </div>
    </div>
  );
};

export default Stacks;
