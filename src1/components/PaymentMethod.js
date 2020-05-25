import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormLabel from './FormLabel';

export default class PaymentMethod extends Component {
  render() {
    return (
      <View style={styles.paymentChoosenContainer}>
        <FormLabel label="Payment Method" />
        <View style={styles.choosenPaymentMethodContainer}>
          <Icon
            style={{paddingStart: wp('2%')}}
            name="check-circle"
            size={wp('6%')}
            color="#208377"
          />
          <Text style={styles.bankTrText}>Bank Transfer</Text>
          <Icon
            style={{paddingStart: wp('2%')}}
            name="info-circle"
            size={wp('4%')}
            color="#208377"
          />
        </View>
      </View>
    );
  }
}
