import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../assets/css/payment';
import ErrorMessage from './ErrorMessage';

export default class FormItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.userInputContainer}>
        <View
          style={[
            styles.choosenPaymentMethodContainer,
            styles.countryContainer,
          ]}>
          <Text style={styles.bankTrText}>{this.props.title}</Text>
          <TextInput
            style={styles.bankDetailsText}
            keyboardType={
              this.props.keyBoardType ? this.props.keyBoardType : 'default'
            }
            onChangeText={text =>
              this.props.changePaymentDetails(this.props.label, text)
            }
            value={this.props.value}
          />
        </View>
        {this.props.showError ? (
          <ErrorMessage message={this.props.errorMessage} />
        ) : null}
      </View>
    );
  }
}
