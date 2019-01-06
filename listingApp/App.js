/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

const deviceHeight: number = Dimensions.get( 'window' ).height;
const deviceWidth: number = Dimensions.get( 'window' ).width;

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
  }

  addItem(item) {
    let data = [];

    this.state.data.map((savedItem) => {

      if (item.item.color !== savedItem.color) {
        data.push(savedItem);
      } else{
        data.push({
          color: item.item.color,
          count: item.item.count + 1,
        });
      }
    });
    this.setState({data: data});
  }

  removeItem(item) {
    let data = [];

    this.state.data.map((savedItem) => {

      if (item.item.color !== savedItem.color) {
        data.push(savedItem);
      } else{
        data.push({
          color: item.item.color,
          count: item.item.count - 1,
        });
      }
    });
    this.setState({data: data});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={ this.captureRef }
          data={ this.state.data }
          extraData={ this.state.data }
          keyExtractor={ item => item.color }
          renderItem={ (item) => {
            console.log('Rendering item with color:', item.item.color);
            return(
              <View style={[styles.listContainer, {
                backgroundColor: item.item.color,
                }]}>
                <View style={ styles.counterContainer }>
                  <TouchableOpacity
                    underlayColor={ 'transparent' }
                    style={ styles.plusMinusButton }
                    onPress={ () => {
                      this.removeItem(item);
                   } }
                  >
                  <Text style={ styles.plusMinusSign }>-</Text>

                  </TouchableOpacity>
                  <Text
                    style={ styles.itemQuantity }
                    numberOfLines={ 1 }
                  >
                    { item.item.count }
                  </Text>
                  <TouchableOpacity
                    underlayColor={ 'transparent' }
                    style={ styles.plusMinusButton }
                    onPress={ () => {
                      this.addItem(item);
                     } }
                  >
                    <Text style={ styles.plusMinusSign }>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
            } }
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
  listContainer: {
    height: 250,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusButton: {
    borderWidth: 1,
    width: 24,
    height: 24,
    borderColor: 'white',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusMinusSign: {
    color: 'black',
    padding: 0,
    alignSelf: 'center',
    paddingBottom: 2,
  },
  itemQuantity: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  counterContainer: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
