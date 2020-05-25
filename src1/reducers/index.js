import {combineReducers} from 'redux';
import PaymentReducer from './PaymentReducer';

export default combineReducers({
  payment: PaymentReducer,
});
