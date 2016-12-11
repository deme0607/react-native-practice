import React, { Component } from 'react';
import { View } from 'react-native';

const parentStyle = {
  flex: 1,
  //flexDirection: 'column',
  flexDirection: 'row',
  //justifyContent: 'flex-start',
  //justifyContent: 'center',
  justifyContent: 'flex-end',
  //justifyContent: 'space-around',
  //justifyContent: 'space-between',
};

const childrenStyle = {
  width: 50,
  height: 50,
};

export default class JustifyContentBasics extends Component {
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
