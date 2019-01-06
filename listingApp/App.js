/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import ListItem from './components/list-item';

const data = [
  {
    color: 'pink',
    count: 1
  },
  {
    color: 'green',
    count: 1
  },
  {
    color: 'brown',
    count: 1
  },
  {
    color: 'red',
    count: 1
  },
  {
    color: 'blue',
    count: 1
  },
]

type Props = {};
export default class App extends Component<Props> {
  constructor( props: Props ) {
    super( props );

    this.state = {
      data: data,
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  addItem(item) {
    let data = [];

    this.state.data.map((savedItem) => {

      if (item.color !== savedItem.color) {
        data.push(savedItem);
      } else{
        data.push({
          color: item.color,
          count: item.count + 1,
        });
      }
    });
    this.setState({data: data});
  }

  removeItem(item) {
    let data = [];

    this.state.data.map((savedItem) => {

      if (item.color !== savedItem.color) {
        data.push(savedItem);
      } else{
        data.push({
          color: item.color,
          count: item.count - 1,
        });
      }
    });
    this.setState({data: data});
  }

  renderItem(item) {
    return(
      <ListItem
      item={item.item}
      addItem={this.addItem}
      removeItem={this.removeItem}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={ this.captureRef }
          data={ this.state.data }
          keyExtractor={ item => item.color }
          renderItem={ this.renderItem }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
