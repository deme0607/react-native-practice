/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

export default class TestApp extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}

AppRegistry.registerComponent('TestApp', () => TestApp);
