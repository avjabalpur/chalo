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
  StatusBar,
  KeyboardAvoidingView} from 'react-native';

type Props = {};
class Header extends Component<Props> {
  render() {
    const { props } = this;

    return (
      <View>
        <StatusBar
          translucent
          backgroundColor="#CA5D09"
          animated
          barStyle="light-content"
        />
        <View style={styles.headerContainer}>
          <View style={styles.fBoth}>
           <View style={styles.headerTextContainer}>
              <Text style={styles.headerText} >
                {props.title}
              </Text>
            </View>
          </View>
        </View>
      </View>  
    );
  }
}

export default Header;