import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Switch, Router} from 'react-router-native';

import HomePage from '../AwesomeProject/app/src/Home';
import Table from "../AwesomeProject/app/src/Table";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
      <View style={styles.container}>
      <Switch>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/products" Component={Table} />
        </Switch>
      <HomePage />
      </View>
      <NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
