import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/css/payment';

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.props.submitDetails}>
          <Text style={styles.submitButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
