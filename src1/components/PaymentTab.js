import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';

export default class PaymentTab extends Component {
  render() {
    return (
      <View style={styles.paymentTabContainer}>
        <View style={[styles.circleContainer]}>
          <View style={styles.circleOuterView}>
            <View style={styles.circle} />
            <View style={styles.line} />
          </View>
          <Text style={styles.paymentTabText}>Claim Details</Text>
        </View>
        <View style={[styles.circleContainer, styles.bigCircleContainer]}>
          <View style={[styles.circleOuterView, styles.circleOddOuterView]}>
            <View style={[styles.line, styles.bigLine]} />
            <View style={styles.circle} />
            <View style={[styles.line, styles.bigLine]} />
          </View>
          <Text style={styles.paymentTabText}>Needed Documents</Text>
        </View>
        <View style={[styles.circleContainer, styles.bigCircleContainer]}>
          <View style={[styles.circleOuterView, styles.circleOddOuterView]}>
            <View style={[styles.line, styles.bigLine]} />
            <View style={[styles.circle, styles.selectedPayment]}>
              <View style={styles.selectedPaymentCircle} />
            </View>
            <View style={[styles.line, styles.bigLine]} />
          </View>
          <Text style={styles.paymentTabSelectedText}>Payment Method</Text>
        </View>
        <View style={[styles.circleContainer]}>
          <View style={[styles.circleOuterView, styles.circleLastOuterView]}>
            <View style={styles.line} />
            <View style={styles.circle} />
          </View>
          <Text style={styles.paymentTabText}>Confirmation</Text>
        </View>
      </View>
    );
  }
}
