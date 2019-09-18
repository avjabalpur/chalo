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
      title: 'Login'
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Register'
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  Events: {
    screen: Events,
    navigationOptions: () => ({
      title: 'Events'
    })
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: () => ({
      title: 'Event Details'
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
