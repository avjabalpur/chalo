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


type Props = {};
class Profile extends Component<Props> {
  state = {
    emailOrPhone: null,
    password: null,
    ipAddress: null
  };

onUpdateProfile = () => {
  Alert.alert(
      'Wait I will come soon!',
      `Hi will be there soon!`,
  );
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
            <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.textInput} />
          </View>
           <View style={styles.center}>
            <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.textInput}/>
          </View>

           <View style={styles.center}>
            <TextInput placeholder="Dob" placeholderColor="#c4c3cb" style={styles.textInput}/>
          </View>
            <View style={styles.center}>
            <TextInput placeholder="Address" multiline = {true} numberOfLines={4} placeholderColor="#c4c3cb" style={styles.textInput} />
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