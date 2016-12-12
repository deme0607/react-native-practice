import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

export default class MoviesListView extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({dataSource: this.ds.cloneWithRows(responseJson.movies)})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title + '(' + rowData.releaseYear + ')'}</Text>}
        />
      </View>
    );
  }
}