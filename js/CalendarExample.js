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
  View
} from 'react-native';
var CalendarPicker = require('./CalendarPicker');

var CalendarExample = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
    };
  },

  onDateChange: function(date) {
    this.setState({
      date: date,
    });
  },
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.container}>
          <CalendarPicker selectedDate={this.state.date}
          onDateChange={this.onDateChange} />
          </View>
         <Text style={styles.selectedDate}>
            时间: { this.state.date.toString() }
          </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',

  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',

  }
});


module.exports = CalendarExample;
