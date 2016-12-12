import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    let textStyle = {
      fontSize: 96,
    };

    let imgSrc = {
      uri: 'https://facebook.github.io/react-native/./img/favicon.png'
    };

    let imgStyle = {
      height: 64,
      width: 64,
    }

    return (
      <ScrollView>
        <Text style={textStyle}>Scroll me plz</Text>
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Text style={textStyle}>If you like</Text>
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Text style={textStyle}>Scrolling Down</Text>
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Text style={textStyle}>"What's the best"</Text>
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Text style={textStyle}>Framework wround?</Text>
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Image source={imgSrc} style={imgStyle} />
        <Text style={textStyle}>React Native</Text>
      </ScrollView>
    );
  }
}