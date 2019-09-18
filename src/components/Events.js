import React, { Component } from 'react';
import { StyleSheet,View, TouchableWithoutFeedback,Text } from 'react-native';

type Props = {};
class Events extends Component<Props> {
  state = {
    emailOrPhone: null,
    password: null,
    ipAddress: null
  };

  goToEventDetails=() => {
    this.props.navigation.navigate('EventDetails')
  }  

  render() {
    return (
      <View style={styles.sectionContainer}>
        <TouchableWithoutFeedback onPress={this.goToEventDetails}>
        <Text style={styles.sectionTitle}>go to EventDetails</Text>
        </TouchableWithoutFeedback>
      </View>
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
    margin : 20,
    marginTop: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#307BBA',
    shadowOpacity: 1
  }
});

export default Events;