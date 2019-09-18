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

class Login extends Component<Props> {
  state = {
    emailOrPhone: null,
    password: null,
    ipAddress: null
  };

  goToRegister=() => {
    this.props.navigation.navigate('Register')
  }

  componentDidMount = () =>{
  }

  componentWillUnmount = () => {
  }

  onLoginPress = () => {

  }  

  onFbLoginPress = () => {
    Alert.alert(
      'Wait I will come soon!',
      `Hi will be there soon!`,
    );
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginFormView}>
          <View style={styles.center}>
            <Image style={styles.logo} source={require('../asserts/images/logo.png')}/>
          </View>
          <View style={styles.center}>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.textInput} />
          </View>
           <View style={styles.center}>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
          </View>
          <View>
            <View style={styles.center}>
              <TouchableOpacity style={styles.button} onPress={this.onLoginPress}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>  
            <View style={styles.center}>
              <TouchableOpacity style={styles.button} onPress={this.onFbLoginPress}>
                <Text style={styles.btnText}>Login with Facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.center}>
              <TouchableOpacity style={styles.button} onPress={this.goToRegister}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;