import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Home = ({ counter, incrementCounter }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Text>Counter: {counter}</Text>
    <TouchableOpacity onPress={incrementCounter}>
      <Text>
        Increment
      </Text>
    </TouchableOpacity>
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
