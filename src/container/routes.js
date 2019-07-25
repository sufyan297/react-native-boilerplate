import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { Alert, BackHandler } from 'react-native';

//Screens
import Home from '../screens/HomeScreen';

export default class Routes extends React.Component {

  onBackAndroid() {
    if (Actions.currentScene === '_home') {
      Alert.alert(
        'Are you sure? You want to exit?',
        '' ,
        [
          {text: 'No', onPress: () => {}, style: 'cancel'},
          {text: 'Yes', onPress: () => { BackHandler.exitApp() }},
        ],
        { cancelable: false }
      );
      return true;
    } else {
      Actions.pop();
      return true;
    }
  }

  render() {
    return (
      <Router backAndroidHandler={() => this.onBackAndroid()}>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar/>
        </Stack>
      </Router>
    )
  }
}