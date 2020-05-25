import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Constant} from '../../Constant';

export default StyleSheet.create({
  mainContainer: {
    height: hp('100%'),
    backgroundColor: Constant.APP_DEFAULT_COLOR,
  },
  actionButtons: {
    height: hp('3%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: wp('2%'),
    paddingEnd: wp('2%'),
  },
  actionButtonContainer: {
    width: wp('15%'),
    height: hp('3%'),
    justifyContent: 'center',
  },
  cancelAction: {
    color: Constant.APP_WHITE_COLOR,
    fontSize: wp('2.5%'),
  },
  saveAction: {
    alignSelf: 'flex-end',
  },
  titleContainer: {
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp('4%'),
    color: Constant.APP_WHITE_COLOR,
  },
  policyText: {
    color: Constant.APP_WHITE_COLOR,
    fontSize: wp('3%'),
  },
  policyPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentTabContainer: {
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleContainer: {
    width: wp('20%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircleContainer: {
    width: wp('30%'),
  },
  circleOuterView: {
    paddingBottom: hp('1%'),
    paddingStart: wp('10%'),
    width: wp('25%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleOddOuterView: {
    paddingStart: 0,
    width: wp('30%'),
  },
  circleLastOuterView: {
    paddingStart: 0,
  },
  circle: {
    borderWidth: 1,
    height: wp('5%'),
    width: wp('5%'),
    borderRadius: 10,
    borderColor: Constant.APP_TEXT_COLOR,
  },
  selectedPaymentCircle: {
    height: wp('3%'),
    width: wp('3%'),
    borderRadius: 10,
    backgroundColor: Constant.APP_WHITE_COLOR,
  },
  selectedPayment: {
    borderColor: Constant.APP_WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: wp('10%'),
    height: 0.5,
    borderWidth: 1,
    borderColor: Constant.APP_TEXT_COLOR,
  },
  bigLine: {
    width: wp('12.5%'),
    height: 0.5,
    borderWidth: 1,
  },
  paymentTabText: {
    fontSize: wp('3%'),
    color: Constant.APP_TEXT_COLOR,
  },
  paymentTabSelectedText: {
    fontSize: wp('3%'),
    color: Constant.APP_WHITE_COLOR,
  },
  contentContainer: {
    height: hp('78%'),
    backgroundColor: '#f3f3f1',
  },
  submitButtonContainer: {
    height: hp('5%'),
    backgroundColor: Constant.APP_DEFAULT_COLOR,
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentChoosenContainer: {
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentChoosenTextContainer: {
    height: hp('5%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingStart: wp('2%'),
  },
  paumentChoosenText: {
    fontSize: wp('4.5%'),
    color: '#636363',
    fontWeight: 'bold',
  },
  choosenPaymentMethodContainer: {
    backgroundColor: Constant.APP_WHITE_COLOR,
    height: hp('5%'),
    width: wp('95%'),
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryContainer: {
    justifyContent: 'space-between',
    paddingStart: wp('5%'),
    paddingEnd: wp('5%'),
    marginBottom: hp('0.5%'),
  },
  bankTrText: {
    paddingStart: wp('2%'),
    fontSize: wp('4%'),
    paddingEnd: 0,
  },
  bankDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryPickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('20%'),
  },
  bankDetailsText: {
    width: wp('30%'),
    height: hp('5.5%'),
    fontSize: wp('4%'),
  },
  submitButtonText: {
    color: Constant.APP_WHITE_COLOR,
  },
  userInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessageContainer: {
    width: wp('50%'),
    height: hp('5%'),
    backgroundColor: '#ee163f',
    borderRadius: 5,
    position: 'absolute',
    top: wp('8%'),
    zIndex: 10,
    justifyContent: 'center',
  },
  errorCaretIcon: {
    position: 'absolute',
    top: wp('-4.5%'),
    paddingStart: wp('5%'),
  },
  errorMessageText: {
    color: Constant.APP_WHITE_COLOR,
    alignSelf: 'center',
  },
});
