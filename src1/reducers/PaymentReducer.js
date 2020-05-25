import {Constant} from '../Constant';

const INTIAL_STATE = {
  country: 'Select',
  currency: 'Select',
  iban: '',
  swift: '',
  accountNumber: '',
  accountName: '',
  bankName: '',
  bankAddress: '',
  branch: '',
  city: '',
  phone: '',
  email: '',
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Constant.SET_INTIAL_PAYMENT_STATE:
      return {...INTIAL_STATE};
    case Constant.SET_PAYMENT_DETAILS:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
