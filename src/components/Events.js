import React, { Component } from 'react';
import { StyleSheet,View, TouchableWithoutFeedback,Text, ScrollView } from 'react-native';
import Header from './Header';
import FooterNav from './FooterNav';
import styles from "../asserts/style/style";

type Props = {};
class Events extends Component<Props> {

  goToEventDetails=() => {
    this.props.navigation.navigate('EventDetails')
  }  

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Events" />
        <ScrollView>
           <View>
              <TouchableWithoutFeedback onPress={this.goToEventDetails}>
              <Text style={styles.sectionTitle}>go to EventDetails</Text>
              </TouchableWithoutFeedback>
          </View>
        </ScrollView>
        <View>
          <FooterNav navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

export default Events;