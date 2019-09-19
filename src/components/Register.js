import React, { Component } from 'react';
import styles from "../asserts/style/style";

import {
  Keyboard,
  StyleSheet, 
  Text,
  View,
  Image,
  TextInput,Button,
  TouchableOpacity,
  Alert, 
  KeyboardAvoidingView} from 'react-native';


type Props = {};
class Register extends Component<Props> {
  state = {
    emailOrPhone: null,
    password: null,
    ipAddress: null
  };

  goToEvents=() => {
    this.props.navigation.navigate('Events')
  }  
  goToProfile=() => {
    this.props.navigation.navigate('Profile')
  } 
  goToLogin=() => {
    this.props.navigation.navigate('Login')
  }  

  render() {
    return (

       <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.registerFormView}>
          
          <View style={styles.center}>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.textInput} />
          </View>
           <View style={styles.center}>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
          </View>

           <View style={styles.center}>
            <TextInput placeholder="Retype Password" placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
          </View>
            <View style={styles.center}>
            <TextInput placeholder="Phone" placeholderColor="#c4c3cb" style={styles.textInput} />
          </View>
          <View>
            <View style={styles.center}>
              <TouchableOpacity style={styles.button} onPress={this.goToEvents}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;