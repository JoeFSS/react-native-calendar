/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';
var CalendarExample = require('./js/CalendarExample');
var react-native-calendar = React.createClass({

  render: function () {
    return (
        <Navigator
            initialRoute={{ component: CalendarExample }}
            configureScene={(route) => {
                 return Navigator.SceneConfigs.FloatFromBottom;
               }}
            renderScene={(route, navigator) => {
               let Component = route.component;
                 if(route.component) {
                  return <Component {...route.passProps} navigator={navigator} />
                 }
          }} />
    );

  },
});

AppRegistry.registerComponent('calendarExample', () => react-native-calendar);
