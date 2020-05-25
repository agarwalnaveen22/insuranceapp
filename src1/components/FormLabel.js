import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';

export default class FormLabel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.paymentChoosenTextContainer}>
        <Text style={styles.paumentChoosenText}>{this.props.label}</Text>
      </View>
    );
  }
}
