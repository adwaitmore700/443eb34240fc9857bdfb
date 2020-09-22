import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/router/navigation'
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <Navigation/>
  </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
