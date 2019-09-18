import React, { Component } from 'react';

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginFormView}>

          <View style={styles.center}>
            <Image style={styles.logo} source={require('../asserts/logo.png')}/>
          </View>
          <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
          <View>
            <Button
              buttonStyle={styles.button}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
            <Button
              buttonStyle={styles.button}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width:'90%',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#307BBA',
    shadowOpacity: 1,
    padding:10
  },
containerView: {
  flex: 1,
  backgroundColor: '#006A71',
},

logo: {
  marginTop: 20
},

loginFormView: {
  flex: 1
},

loginFormTextInput: {
  height: 50,
  fontSize: 16,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 10,
  marginBottom: 10,
  width:'90%'
}
});

export default Login;