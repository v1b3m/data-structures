/* eslint-disable react/prop-types */
import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  HomeOutlined,
  PermDataSettingOutlined,
  CodeOutlined,
  LowPriority,
  LinearScaleOutlined,
  List as Lists,
  DonutLargeOutlined,
  GitHub,
  Info,
} from '@material-ui/icons';
import { Setpage, screens } from '../types';

interface props {
  setPage: Setpage;
  selected: screens;
  closeDrawer: () => void;
}

const openGithub = () =>
  window.open('https://github.com/v1b3m/data-structures', '_blank')?.focus();

const DrawerList: React.FC<props> = ({ setPage, selected, closeDrawer }) => (
  <div>
    <List>
      <ListItem
        button
        key="Home"
        onClick={() => {
          closeDrawer();
          setPage(screens.Home);
        }}
        selected={selected === screens.Home}
      >
        <ListItemIcon>
          <HomeOutlined />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem
        button
        key="DataStructures"
        onClick={() => {
          closeDrawer();
          setPage(screens.DataStructures);
        }}
        selected={selected === screens.DataStructures}
      >
        <ListItemIcon>
          <PermDataSettingOutlined />
        </ListItemIcon>
        <ListItemText primary="DataStructures" />
      </ListItem>

      <ListItem
        button
        key="Algorithms"
        onClick={() => {
          closeDrawer();
          setPage(screens.Algorithms);
        }}
        selected={selected === screens.Algorithms}
      >
        <ListItemIcon>
          <CodeOutlined />
        </ListItemIcon>
        <ListItemText primary="Algorithms" />
      </ListItem>

      <ListItem
        button
        key="Queues"
        onClick={() => {
          closeDrawer();
          setPage(screens.Queues);
        }}
        selected={selected === screens.Queues}
      >
        <ListItemIcon>
          <LowPriority />
        </ListItemIcon>
        <ListItemText primary="Queues" />
      </ListItem>

      <ListItem
        button
        key="Stacks"
        onClick={() => {
          closeDrawer();
          setPage(screens.Stacks);
        }}
        selected={selected === screens.Stacks}
      >
        <ListItemIcon>
          <Lists />
        </ListItemIcon>
        <ListItemText primary="Stacks" />
      </ListItem>

      <ListItem
        button
        key="Linear"
        onClick={() => {
          closeDrawer();
          setPage(screens.Linear);
        }}
        selected={selected === screens.Linear}
      >
        <ListItemIcon>
          <LinearScaleOutlined />
        </ListItemIcon>
        <ListItemText primary="Linear Queues" />
      </ListItem>

      <ListItem
        button
        key="Circular"
        onClick={() => {
          closeDrawer();
          setPage(screens.Circular);
        }}
        selected={selected === screens.Circular}
      >
        <ListItemIcon>
          <DonutLargeOutlined />
        </ListItemIcon>
        <ListItemText primary="Circular Queues" />
      </ListItem>
    </List>

    <Divider />

    <List>
      <ListItem button key="GitHub" onClick={openGithub}>
        <ListItemIcon>
          <GitHub />
        </ListItemIcon>
        <ListItemText primary="GitHub" />
      </ListItem>

      <ListItem button key="About us">
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="About us" />
      </ListItem>
    </List>
  </div>
);

export default DrawerList;
