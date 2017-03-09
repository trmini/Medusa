import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Container from 'Medusa/app/components/Container';
import Button from 'Medusa/app/components/Button';
import Label from 'Medusa/app/components/Label';

export default class LoginPage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <Label
            text="Login"
            styles={{textLabel: styles.headerText}}
          />
          <Label text="Enter your user name and password to log in."/>
        </Container>
        <Container>
          <Label text="Username or Email" />
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            selectionColor={'#F58546'}
            style={styles.textInput}
          />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={false}
            selectTextOnFocus={true}
            secureTextEntry={true}
            selectionColor={'#F58546'}
            style={styles.textInput}
          />
        </Container>
        <View style={styles.footer}>
          <Container>
              <Button
                  label="LOGIN"
                  styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                  onPress={this.press.bind(this)} />
          </Container>
          <Container>
              <Button
                  label="CANCEL"
                  styles={{label: styles.buttonBlackText}}
                  onPress={this.press.bind(this)} />
          </Container>
          <Container>
            <Button
              label="Forgot your password?"
              styles={{label: styles.label}}
              onPress={this.press.bind(this)} />
          </Container>
        </View>
      </ScrollView>
    );
  }

  press() {
  //execute any code here
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  headerText: {
    fontSize: 30,
    color: '#333'
  },
  label: {
    color: '#F58546'
  },
  textInput: {
    height: 40,
    fontSize: 15,
    backgroundColor: '#FFF'
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonBlackText: {
      fontSize: 20,
      color: '#F58546'
  },
  primaryButton: {
      backgroundColor: '#F58546'
  },
  footer: {
     marginTop: 100
  },
});
