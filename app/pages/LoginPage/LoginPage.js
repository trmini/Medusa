import React, { Component } from 'react';

import {
  Alert,
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
  constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
  }

  render() {
    const {username, password} = this.state;

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
          <Label text="User Name or Email" />
          <TextInput
            onChangeText={username => this.setState({ username })}
            value={username}
            autoCapitalize={'none'}
            autoCorrect={false}
            selectionColor={'#F58546'}
            style={styles.textInput}
          />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput
            onChangeText={password => this.setState({ password })}
            value={password}
            autoCapitalize={'none'}
            autoCorrect={false}
            selectTextOnFocus={true}
            secureTextEntry={true}
            selectionColor={'#F58546'}
            style={styles.textInput}
          />
        </Container>
        <View style={styles.footer}>
          <View style={styles.form_buttons}>
            <Container>
                <Button
                    label="LOGIN"
                    disabled={!username || !password}
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <Button
                    label="CANCEL"
                    styles={{button: styles.secondaryButton, label: styles.buttonBlackText}}
                    onPress={this.press.bind(this)} />
            </Container>
          </View>
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
    return Alert.alert('Testing');
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
    color: '#333',
    margin: 5
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
    color: '#FFF'
  },
  buttonBlackText: {
    fontSize: 20,
    color: '#F58546'
  },
  primaryButton: {
    width: 120,
    backgroundColor: '#F58546',
    borderWidth: 1,
    borderColor: '#F58546',
    marginRight: 10
  },
  secondaryButton: {
    width: 120,
    borderWidth: 1,
    borderColor: '#F58546',
    marginLeft: 10
  },
  footer: {
     marginTop: 100
  },
  form_buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
