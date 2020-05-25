import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../assets/css/payment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ErrorMessage from './ErrorMessage';

export default class FormDropDown extends Component {
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
          <Text style={styles.bankTrText}>{this.props.label}</Text>
          <TouchableOpacity
            style={styles.countryPickerContainer}
            onPress={() => this.props.showPicker(true)}>
            <Text style={styles.bankTrText}>{this.props.selectedText}</Text>
            <Icon
              style={{paddingStart: wp('2%')}}
              name="chevron-right"
              size={wp('3.5%')}
            />
          </TouchableOpacity>
        </View>
        {this.props.showError ? (
          <ErrorMessage message={this.props.errorMessage} />
        ) : null}
      </View>
    );
  }
}
