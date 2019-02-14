import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import ListItens from './src/components/ListItens'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <ListItens/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
