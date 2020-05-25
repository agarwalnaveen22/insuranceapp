import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import styles from '../assets/css/payment';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import PaymentTab from '../components/PaymentTab';
import PaymentMethod from '../components/PaymentMethod';
import BankDetails from '../components/BankDetails';
import PaymentActions from '../components/PaymentActions';
import Title from '../components/Title';
import CurrentTabDetails from '../components/CurrentTabDetails';
import FormLabel from '../components/FormLabel';
import FormDropDown from '../components/FormDropDown';
import Country from '../assets/countries';
import Currency from '../assets/currencies';
import SubmitButton from '../components/SubmitButton';
import {Constant} from '../Constant';
import {connect} from 'react-redux';
import {setPaymentDataToInitialState, setPaymentData} from '../actions';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currencyVisible: false,
      showBankDetails: false,
      requiredFields: {
        iban: false,
        swift: false,
        accountNumber: false,
        accountName: false,
        currency: false,
        bankAddress: false,
        country: false,
      },
    };
    this.countries = Country;
    this.currencies = Currency;
  }

  componentDidMount() {
    this.props.setPaymentDataToInitialState();
  }

  onCountrySelect = async picked => {
    this.setState({
      showBankDetails: true,
    });
    await this.props.setPaymentData({prop: 'country', value: picked.key});
    this.validateFields('country');
    this.showCountryPicker(false, 1);
  };

  onCurrencySelect = async picked => {
    await this.props.setPaymentData({prop: 'currency', value: picked.key});
    this.validateFields('currency');
    this.showCurrencyPicker(false, 1);
  };

  showBankDetailContainer = () => {
    return (
      <BankDetails
        showCurrencyPicker={this.showCurrencyPicker}
        changePaymentDetails={this.changePaymentDetails}
        paymentData={this.props}
        requiredFields={this.state.requiredFields}
      />
    );
  };

  countryPicker = () => {
    return (
      <ModalFilterPicker
        visible={this.state.visible}
        onSelect={this.onCountrySelect}
        onCancel={() => this.showCountryPicker(false, 2)}
        options={this.countries}
      />
    );
  };

  currencyPicker = () => {
    return (
      <ModalFilterPicker
        visible={this.state.currencyVisible}
        onSelect={this.onCurrencySelect}
        onCancel={() => this.showCurrencyPicker(false, 2)}
        options={this.currencies}
      />
    );
  };

  showCountryPicker = (state, type) => {
    this.setState({visible: state});
    if (type === 2) {
      this.setState({showBankDetails: false});
      this.props.setPaymentData({prop: 'country', value: 'Select'});
    }
  };

  showCurrencyPicker = async (state, type) => {
    this.setState({currencyVisible: state});
    if (type === 2) {
      await this.props.setPaymentData({prop: 'currency', value: 'Select'});
    }
  };

  changePaymentDetails = async (label, key) => {
    await this.props.setPaymentData({prop: label, value: key});
    this.validateFields(label);
  };

  validateFields = key => {
    if (key === 'currency' || key === 'country') {
      if (this.props[key] === 'Select') {
        this.setState({requiredFields: {[key]: true}});
        return false;
      } else {
        this.setState({requiredFields: {[key]: false}});
        return true;
      }
    } else {
      if (this.props[key] === '') {
        this.setState({requiredFields: {[key]: true}});
        return false;
      } else {
        this.setState({requiredFields: {[key]: false}});
        return true;
      }
    }
  };

  submitDetails = () => {
    if (
      this.validateFields('country') &&
      this.validateFields('iban') &&
      this.validateFields('swift') &&
      this.validateFields('accountNumber') &&
      this.validateFields('accountName') &&
      this.validateFields('currency') &&
      this.validateFields('bankAddress')
    ) {
      alert('We have received your payment details.');
    }
  };

  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.mainContainer}>
        <PaymentActions />
        <Title title="Submit ReimbursementClaims" />
        <CurrentTabDetails />
        <PaymentTab />
        <View style={styles.contentContainer}>
          {!this.state.showBankDetails ? <PaymentMethod /> : null}
          <View style={styles.bankDetailsContainer}>
            <FormLabel label="Bank Account Details" />
            {this.countryPicker()}
            {this.currencyPicker()}
            <FormDropDown
              label="Country*"
              showPicker={this.showCountryPicker}
              selectedText={this.props.country}
              showError={this.state.requiredFields.country}
              errorMessage={Constant.REQUIRED_MESSAGE}
            />
            {this.state.showBankDetails ? this.showBankDetailContainer() : null}
            <View />
          </View>
        </View>
        <SubmitButton title="Continue" submitDetails={this.submitDetails} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return state.payment;
};

export default connect(
  mapStateToProps,
  {setPaymentDataToInitialState, setPaymentData},
)(PaymentScreen);
