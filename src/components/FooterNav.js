import React, { Component } from 'react';
import styles from "../asserts/style/style";

import {
  StyleSheet, 
  Text,
  View,
  TouchableOpacity,
  Alert,
  AsyncStorage
  } from 'react-native';

type Props = {};
class FooterNav extends Component<Props> {

  redirectToAction = (action) => {
    const { navigation } = this.props;
    navigation.navigate(action)
  }

  goToEvents=() => {
    this.redirectToAction('Events');
  } 

  goToProfile=() => {
    this.redirectToAction('Profile');
  } 

  onLogOutPress=() => {
    AsyncStorage.removeItem('logged-in-user', function(){
      this.redirectToAction('Login');  
    })
  } 

  render() {
    const { props } = this;
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={this.goToEvents}>
          <Text style={styles.headerText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToProfile}>
          <Text style={styles.headerText} >Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onLogOutPress}>
          <Text style={styles.headerText} >Logout</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

export default FooterNav;