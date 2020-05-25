import React, {Component} from 'react';
import FormItem from './FormItem';
import FormDropDown from './FormDropDown';
import {Constant} from '../Constant';

export default class BankDetails extends Component {
  render() {
    return (
      <>
        <FormItem
          title="IBAN*"
          showError={this.props.requiredFields.iban}
          errorMessage={Constant.REQUIRED_MESSAGE}
          label="iban"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.iban}
        />
        <FormItem
          title="SWIFT/BIC*"
          showError={this.props.requiredFields.swift}
          errorMessage={Constant.REQUIRED_MESSAGE}
          label="swift"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.swift}
        />
        <FormItem
          title="Account Number*"
          showError={this.props.requiredFields.accountNumber}
          errorMessage={Constant.REQUIRED_MESSAGE}
          label="accountNumber"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.accountNumber}
        />
        <FormItem
          title="Account Name*"
          showError={this.props.requiredFields.accountName}
          errorMessage={Constant.REQUIRED_MESSAGE}
          label="accountName"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.accountName}
        />
        <FormDropDown
          label="Currency*"
          showPicker={this.props.showCurrencyPicker}
          selectedText={this.props.paymentData.currency}
          showError={this.props.requiredFields.currency}
          errorMessage={Constant.REQUIRED_MESSAGE}
        />
        <FormItem
          title="Bank Name"
          label="bankName"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.bankName}
        />
        <FormItem
          title="Bank Address*"
          showError={this.props.requiredFields.bankAddress}
          errorMessage={Constant.REQUIRED_MESSAGE}
          label="bankAddress"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.bankAddress}
        />
        <FormItem
          title="Branch"
          label="branch"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.branch}
        />
        <FormItem
          title="City"
          label="city"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.city}
        />
        <FormItem
          title="Phone"
          label="phone"
          keyBoardType="phone-pad"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.phone}
        />
        <FormItem
          title="Email"
          label="email"
          keyBoardType="email-address"
          changePaymentDetails={this.props.changePaymentDetails}
          value={this.props.paymentData.email}
        />
      </>
    );
  }
}
