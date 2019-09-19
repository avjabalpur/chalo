import React from 'react';

import {
  Keyboard,
  StyleSheet, 
  Text,
  View,
  Image,
  ScrollView,
  TextInput,Button,
  TouchableOpacity,
  Alert, 
  KeyboardAvoidingView} from 'react-native';

const DrawerItem = props => (
  <TouchableOpacity
    className="btn-transparent"
    onPress={() => props.goto(props.routeName)}
  >
    <View className="flex f-row f-center w-1-1 p5">
      <Image className="drawerIcon mh10" source={props.icon} />
      <Text className="complementary bold">{props.label}</Text>
    </View>
  </TouchableOpacity>
);

class DrawerContent extends React.PureComponent {
  goto = route => {
    this.props.navigation.navigate(route);
  };

  render() {
   
    return (
        <ScrollView className="bg-transparent">
          <View className="flex f-both p20 bgWhite mt20">
            <View className="drawer-avatar">
                          <Image style={styles.logo} source={require('../asserts/images/logo.png')}/>

            </View>
            <Text className="mh10 primary t-center subtitle bold">
              ssss
            </Text>
          </View>
          <DrawerItem
            routeName="Dashboard"
            goto={this.goto}
            label="Events"
          />
          <DrawerItem
            routeName="Pofile"
            goto={this.goto}
            label="Profile"
          />
          <DrawerItem
            routeName="Service List"
            goto={this.goto}
            label="Logout"
          />
        </ScrollView>
    );
  }
}


export default DrawerContent