import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
    );
  }
}
