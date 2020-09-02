import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/Redux/Store';


import Root from './src/Root';
// import {pushNotifications} from './src/services/';

// pushNotifications.configure();

export default class App extends Component {
  componentDidMount = () => {
    // pushNotifications.localNotification({title: 'Mera joota hai japani', message: 'Saar pe laal topi taaani'});
  };

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
