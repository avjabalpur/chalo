import React, { Component } from 'react';
import styles from "../asserts/style/style";
import Header from './Header';
import firebase from 'firebase';


import {
  Keyboard,
  StyleSheet, 
  Text,
  View,
  Image,
  TextInput,Button,
  TouchableOpacity,
  Alert, 
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import { login } from '../services/userService'

class Login extends Component<Props> {

  constructor (){
    super();
    this.state = {
        username: '',
        password: ''
    };
  } 

  onSuccess = (user) => {
    console.log('User logged-in success fully', user);
    AsyncStorage.setItem('logged-in-user', JSON.stringify(user));
    this.setState({
        username: '',
        password: ''
    })
    this.props.navigation.navigate('Events')
  }

  onFail = (error) => {
    Alert.alert(
      'Oops!',
      `Unable to login please check and try again! ${error}`,
    );
  }

  goToRegister=() => {
    this.props.navigation.navigate('Register')
  }

  onLoginPress = () => {
    login(this.state, this.onSuccess, this.onFail)
  }  

  onFbLoginPress = () => {
    Alert.alert(
      'Wait I will come soon!',
      `Hi will be there soon!`,
    );
  }

  render() {
    const { userName, password} = this.state;
    let disable = true;
    if (userName && password) {
      disable = false;
    }
    return (
      <View style={{flex: 1}}>
        <Header title="Login" />
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <View style={styles.loginFormView}>
            <View style={styles.center}>
              <Image style={styles.logo} source={require('../asserts/images/logo.png')}/>
            </View>
            <View style={styles.center}>
               <TextInput 
                  placeholder="Username" 
                  placeholderColor="#c4c3cb" 
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({username: text})}/>
            </View>
            <View style={styles.center}>
              <TextInput 
                    placeholder="Password" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}/>  
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
      </View>  
    );
  }
}

export default Login;