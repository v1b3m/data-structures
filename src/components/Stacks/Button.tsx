/* eslint-disable react/prop-types */
import { Button } from '@material-ui/core';
import React from 'react';

interface props {
  text: string;
  onClick: () => void;
}
const CustomButton: React.FC<props> = ({ text, onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {text}
  </Button>
);

export default CustomButton;
