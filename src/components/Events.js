import React, { Component } from 'react';
import { StyleSheet,View, 
  TouchableOpacity,
  Text, 
  ScrollView, 
  Image, 
  Dimensions, 
  Alert,
  AsyncStorage } from 'react-native';
import Header from './Header';
import FooterNav from './FooterNav';
import styles from "../asserts/style/style";

class Events extends Component<Props> {

  goToEventDetails=() => {
    Alert.alert(
      'Wait I will come soon!',
      `Hi will be there soon!`,
    );
  }

   componentDidMount (){
    try {
      AsyncStorage.getItem('logged-in-user', (err, result) => {
        console.log(result);
      })
    } catch (error) {
      // Error retrieving data
      }
    }


  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Upcoming Event" />
        <ScrollView>
          <View>
            <TouchableOpacity onPress={this.goToEventDetails}>
              <Image style = {{height: Dimensions.get('screen').height, width : Dimensions.get('screen').width}} source={require('../asserts/images/event.png')}/>
            </TouchableOpacity>
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