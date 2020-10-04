/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

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

export enum drawerType {
  permanent = 'permanent',
  persistent = 'persistent',
  temporary = 'temporary',
}
