/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

const deviceHeight: number = Dimensions.get( 'window' ).height;
const deviceWidth: number = Dimensions.get( 'window' ).width;

type Props = {
  item: Object,
  addItem: Function,
  removeItem: Function,
};
export default class ListItem extends PureComponent<Props> {

  render() {
    const { item } = this.props;
    console.log('Rendering item with color:',item.color);
    return(
      <View style={[styles.listContainer, {
        backgroundColor: item.color,
        }]}>
        <View style={ styles.counterContainer }>
          <TouchableOpacity
            underlayColor={ 'transparent' }
            style={ styles.plusMinusButton }
            onPress={ () => {
              this.props.removeItem(item);
           } }
          >
          <Text style={ styles.plusMinusSign }>-</Text>

          </TouchableOpacity>
          <Text
            style={ styles.itemQuantity }
            numberOfLines={ 1 }
          >
            { item.count }
          </Text>
          <TouchableOpacity
            underlayColor={ 'transparent' }
            style={ styles.plusMinusButton }
            onPress={ () => {
              this.props.addItem(item);
             } }
          >
            <Text style={ styles.plusMinusSign }>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
