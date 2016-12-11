import React, { Component } from 'react';
import { View, Text } from 'react-native';

const parentStyle = {
  flex: 1,
  //flexDirection: 'column',
  flexDirection: 'row',
  justifyContent: 'center',
  //justifyContent: 'flex-end',
  //alignItems: 'flex-start',
  //alignItems: 'center',
  //alignItems: 'flex-end',
  alignItems: 'stretch',
};

const childrenStyle = { width: 50, height: 50 };

export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={parentStyle}>
        <View style={[childrenStyle, {backgroundColor: 'powderblue'}]} />
        <View style={[childrenStyle, {backgroundColor: 'skyblue'}]} />
        <View style={[childrenStyle, {backgroundColor: 'steelblue'}]} />
      </View>
    );
  }
}