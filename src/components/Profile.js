import React, { Component } from 'react';
import styles from "../asserts/style/style";
import Header from './Header';
import FooterNav from './FooterNav';

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
ScrollView} from 'react-native';
import { updateUser } from '../services/userService'


class Profile extends Component<Props> {
  constructor (){
    super();
    this.state = {
        firstName: '',
        lastName: '',
        dob : '',
        address : ''
    };
  }

onUpdateProfile = () => {
  updateUser(this.state, this.onSuccess, this.onFail)
}

onSuccess = () => {
    Alert.alert(
      'Congrts!',
      `Your details has been successfully updated`,
    );
  }

  onFail = (error) => {
    Alert.alert(
      'Oops!',
      `Couldn't update your details ${error}`,
    );
  }


componentDidMount (){
    try {
      AsyncStorage.getItem('logged-in-user', (err, result) => {
        console.log(JSON.parse(result));
      })
    } catch (error) {
      // Error retrieving data
      }
  }

  render() {
    return (
    <View style={{flex: 1}}>
        <Header title="Profile" />
        <ScrollView style={styles.containerView}>
          <KeyboardAvoidingView>
        <View style={{flex: 1, paddingTop : 20}}>
          
          <View style={styles.center}>
            <Image style={styles.profileImage} source={require('../asserts/images/logo.png')}/>
          </View>

          <View style={styles.center}>
             <TextInput 
                    placeholder="First Name" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({firstName: text})}/>

          </View>
           <View style={styles.center}>
             <TextInput 
                    placeholder="Last Name" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({lastName: text})}/>

          </View>

           <View style={styles.center}>

             <TextInput 
                    placeholder="Dob" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({dob: text})}/>

          </View>
            <View style={styles.center}>

             <TextInput 
                    placeholder="Address" 
                    placeholderColor="#c4c3cb" 
                    style={styles.textInput} 
                    onChangeText={(text) => this.setState({address: text})}
                    multiline = {true} numberOfLines={4}/>

          </View>
          <View>
            <View style={styles.center}>
              <TouchableOpacity style={styles.button} onPress={this.onUpdateProfile}>
                <Text style={styles.btnText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
        </ScrollView>
        <View>
         <FooterNav navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

export default Profile;