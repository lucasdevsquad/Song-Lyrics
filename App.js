import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import axios from 'axios';

import SearchScreen from './src/scenes/SearchScreen/SearchScreen';

const Navigation = createStackNavigator({
  SearchScreen,
})

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    );
  }
}