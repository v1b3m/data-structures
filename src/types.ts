/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
export enum screens {
  Home = 'Home',
  Algorithms = 'Algorithms',
  DataStructures = 'DataStructures',
  Stacks = 'Stacks',
  Queues = 'Queues',
  Linear = 'Linear',
  Circular = 'Circular',
}

export type Setpage = (page: screens) => void;
