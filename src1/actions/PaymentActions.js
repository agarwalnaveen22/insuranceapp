import {Constant} from '../Constant';

export const setPaymentDataToInitialState = () => {
  return {
    type: Constant.SET_INTIAL_PAYMENT_STATE,
    payload: '',
  };
};

export const setPaymentData = ({prop, value}) => {
  return {
    type: Constant.SET_PAYMENT_DETAILS,
    payload: {prop, value},
  };
};
