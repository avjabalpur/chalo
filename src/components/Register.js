import React, { Component } from 'react';
import styles from "../asserts/style/style";
import Header from './Header';
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

import { newRegiser } from '../services/userService'

class Register extends Component<Props> {

  constructor (){
    super();
    this.state = {
        email: '',
        password: '',
        phone: '',
        retypePassword : ''
    };
  
  }

  handleSubmit = () => {
      if (this.state.password != this.state.retypePassword) {
        Alert.alert(
          'Oops!',
          `password and confirm password did not match`,
        );
        return;
      }
      newRegiser(this.state);
      Alert.alert(
        'Congrets!',
        `User has created successfully, please login and enjoy the Yatra!`,
      );
      this.props.navigation.navigate('Login')
    }


  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Register" />
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <View style={styles.registerFormView}>
            <View style={styles.center}>
              <TextInput 
                  placeholder="Email" 
                  placeholderColor="#c4c3cb" 
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({email: text})}/>
            </View>
             <View style={styles.center}>
                <TextInput 
                    placeholder="Password" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}/>
            </View>

             <View style={styles.center}>
                <TextInput 
                    placeholder="Retype Password" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({retypePassword: text})}/>
            </View>
            <View style={styles.center}>
                <TextInput 
                    placeholder="Phone" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({phone: text})}/>
            </View>
            <View>
              <View style={styles.center}>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
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

export default Register;