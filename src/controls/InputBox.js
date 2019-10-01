import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles, { constants } from '../style';

// TODO: need to create our controls
const InputBox = props => (
  <View style={styles.action}>
    <TouchableHighlight
      underlayColor={constants.actionColor}
      onPress={props.onPress}>
      <Text style={styles.actionText}>{props.title}</Text>
    </TouchableHighlight>
  </View>
);

export default ActionButton;