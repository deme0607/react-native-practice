import React, { Component } from 'react';
import { Navigator } from 'react-native';

import MyScene from './my_scene';

export default class YoDawgApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <MyScene title={route.title} />
        }}
      />
    );
  }
}