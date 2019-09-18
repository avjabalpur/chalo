import React, { Component } from 'react';
import styles from "../asserts/style/style";

import {
  Keyboard,
  StyleSheet, 
  Text,
  View,
  Image,
  TextInput,Button,
  TouchableWithoutFeedback,
  Alert, 
  KeyboardAvoidingView} from 'react-native';

type Props = {};
class Profile extends Component<Props> {
  state = {
    emailOrPhone: null,
    password: null,
    ipAddress: null
  };

  goToLogin=() => {
    this.props.navigation.navigate('Login')
  }

  goToEvents=() => {
    this.props.navigation.navigate('Events')
  }   

  render() {
 
    return (
     <KeyboardAvoidingView style={styles.containerView} behavior="padding">
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.registerFormView}>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.textInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
            <TextInput placeholder="Retype Password" placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
            <TextInput placeholder="Phone" placeholderColor="#c4c3cb" style={styles.textInput} />
            <View>
              <Button
                buttonStyle={styles.button}
                onPress={() => this.onLoginPress()}
                title="Register"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default Profile;