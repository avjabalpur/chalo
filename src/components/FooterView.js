import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class FooterView extends Component<Props> {
 
  render() {
    return (
      <View>
        <View style={styles.white}>
          <TouchableOpacity style={styles.card}  onPress={this.goToHome}>
            <Image
              style={styles.mini_thumb}
              source={homeImage}
            />
            <Text fontSize12>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.mini_thumb}
              source={MessengerImage}
            />
            <Text fontSize12>Messenger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.mini_thumb}
              source={NotificationImage}
            />
            <Text fontSize12>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.mini_thumb}
              source={UserNameImage}
            />
            <Text fontSize12>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.marginRight}>
            <Image
              style={styles.mini_thumb}
              source={MoreImage}
            />
            <Text fontSize12>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mini_thumb : {
    height: 25,
    width: 25
  }, 
  white : {
    backgroundColor : 'white'
  },
  marginRight : {
    marginRight : 10,
    alignItems : 'center',
    flexDirection: "column",
    justifyContent: "center"
  }, 
  card : {
    marginLeft : 10,
    alignItems : 'center',
    flexDirection: "column",
    justifyContent: "center",
  }
});

export default FooterView;
