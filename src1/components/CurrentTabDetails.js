import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CurrentTabDetails extends Component {
  render() {
    return (
      <View style={styles.actionButtons}>
        <Text style={styles.policyText}>Policy Number</Text>
        <View style={styles.policyPriceContainer}>
          <Text style={styles.policyText}>9640</Text>
          <Icon
            style={{paddingStart: wp('2%')}}
            name="arrow-right"
            size={wp('4%')}
            color="#fff"
          />
        </View>
      </View>
    );
  }
}
