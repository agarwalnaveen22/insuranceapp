import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src1/reducers';
import PaymentMethod from './src1/screens/payment';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaymentMethod />
      </Provider>
    );
  }
}
