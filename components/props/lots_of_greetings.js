import React, { Component } from 'react';
import { View } from 'react-native';
import Greeting from './greeting'

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Naoki' />
        <Greeting name='Jaina' />
        <Greeting name='Valera' />
      </View>
    );
  }
}
