import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Home = ({ counter }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Text>Counter: {counter}</Text>
    {/* <TouchableHighlight>Increment</TouchableHighlight> */}
    {/* <TouchableHighlight>Decrement</TouchableHighlight> */}
  </View>
);

const mapStateToProps = ({ counterReducer }) => ({
  counter: counterReducer.counter
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
