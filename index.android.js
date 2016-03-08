'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import ToDoContainer from './app/ToDoContainer';

class ToDoList extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: ToDoContainer, component: ToDoContainer}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FadeAndroid;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ToDoList', () => ToDoList);
