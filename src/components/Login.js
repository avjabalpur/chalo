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
  KeyboardAvoidingView} from 'react-native';

class Login extends Component<Props> {

  state = {
    userName: null,
    password: null
  };

  goToRegister=() => {
    this.props.navigation.navigate('Register')
  }

  componentDidMount = () => {

    //console.log(firebase,'2222222222222222222222222');
    /*console.log('111111111111111111111111111111111111111111111');
    let config = {
      apiKey: "AIzaSyB1rFYVBrgvh5-hRqv_xpgekkqbtrH2tBY",
      authDomain: "chalo-f4f9d.firebaseapp.com",
      databaseURL: "https://chalo-f4f9d.firebaseio.com",
      projectId: "chalo-f4f9d",
      storageBucket: "",
      messagingSenderId: "919247220416",
      appId: "1:919247220416:web:13c77ee4ecce932acb4725",
      measurementId: "G-KSQ50058C3"
  };

  firebase.initializeApp(config);

  console.log('2222222222222222222222222');


  firebase.database().ref().child('users').push({
    name: 'amit',
    check:'amit'
  }).then((data)=>{
        console.log('&&&&&&&&&&&&&&&&&&success', data);
        console.log('data ' , data)
    }).catch((error)=>{
        console.log('&&&&&&&&&&&&&&&&&&error', error1);
        console.log('error ' , error)
    });

    console.log('333333333333333333');*/
  }




  onLoginPress = () => {
    //console.log(this.state, 'state')
    this.props.navigation.navigate('Events')
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
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.textInput}
              onChangeText={userName =>
                this.setState({
                  userName
                })
              } 
              value={this.state.userName}/>
            </View>
             <View style={styles.center}>
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.textInput} 
              secureTextEntry={true} 
              onChangeText={password =>
                this.setState({
                  password
                })
              }
              value={this.state.password}
              />
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