import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/css/payment';

export default class PaymentActions extends Component {
  render() {
    return (
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButtonContainer}>
          <Text style={styles.cancelAction}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonContainer}>
          <Text style={styles.saveAction}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
