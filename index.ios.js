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
import BlinkApp from './components/blink_app';
import LotsOfStyles from './components/lots_of_styles';
import FixedDimensionsBasics from './components/fixed_dimensions_basics';
import FlexDimensionsBasics from './components/flex_dimensions_basics';
import FlexDirectionBasics from './components/flexbox/flex_direction_basics';
import JustifyContentBasics from './components/flexbox/justify_content_basics';
import AlignItemsBasics from './components/flexbox/align_items_basics';

export default class TestApp extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}

AppRegistry.registerComponent('TestApp', () => AlignItemsBasics);
