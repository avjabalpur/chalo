import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Login,
  Register,
  Profile,
  Events,
  EventDetails
} from './components';

const SigninNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      header: null,
    })
  },
  Events: {
    screen: Events,
    navigationOptions: () => ({
      header: null,
    })  
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: () => ({
      header: null,
    })
  }
});

export const createRootNavigator = () =>
  createAppContainer(
    createSwitchNavigator(
      {
        //AuthLoading: AuthLoading,
        Signin: SigninNavigator,
        //App: AppNavigator
      },
      {
        initialRouteName: 'Signin'
      }
    )
  );
