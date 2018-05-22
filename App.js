/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import MainNavigator from './src/containers';

const store = createStore(reducers);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Provider store={store}><MainNavigator /></Provider>;
  }
}
