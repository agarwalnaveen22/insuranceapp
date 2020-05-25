import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/css/payment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.errorMessageContainer}>
        <Icon
          style={styles.errorCaretIcon}
          name="caret-up"
          size={wp('7%')}
          color="#ee163f"
        />
        <Text style={styles.errorMessageText}>{this.props.message}</Text>
      </View>
    );
  }
}
