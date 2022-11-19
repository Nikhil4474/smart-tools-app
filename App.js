import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './screens/Login';
import BottomTabNavigator from './components/BottomTabNavigator';
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const SwitchNavigator = createSwitchNavigator({
  login: { screen: Login },
  bottomTab: { screen: BottomTabNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);