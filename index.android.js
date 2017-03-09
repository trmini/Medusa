import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import LoginPage from './app/pages/LoginPage/LoginPage';

export default class Medusa extends Component {
  render() {
    return (
        <LoginPage />
    );
  }
}

AppRegistry.registerComponent('Medusa', () => Medusa);
