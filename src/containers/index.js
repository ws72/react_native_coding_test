import { TabNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import { Image, Dimensions } from 'react-native';
import RatePage from './RatePage';
import RecipientPage from './RecipientPage';
import SettingPage from './SettingPage';
import TransferPage from './TransferPage';
import UpdatePage from './UpdatePage';
import NewsDetailPage from './NewsDetailPage';
import { ACTIVETINTCOLOR, INACTIVETINTCOLOR } from '../config/colors';

const deviceWidth = Dimensions.get('window').width;

/* eslint-disable react/prop-types, global-require */
export default TabNavigator({
  Rates: {
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../assets/images/Rates-Active.png') : require('../assets/images/Rates.png')} />
      ),
      title: 'RATES',
    },
    screen: RatePage,
  },
  Updates: {
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../assets/images/Updates-Active.png') : require('../assets/images/Updates.png')} />
      ),
      title: 'UPDATES',
    },
    // TODO: extract this to separate file if the nested navigator get more complicated
    screen: StackNavigator({
      UpdateStack: {
        screen: UpdatePage,
      },
      NewsDetail: {
        screen: NewsDetailPage,
      },
    }, {
      headerMode: 'screen',
    }),
  },
  Transfers: {
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../assets/images/Transfers-Active.png') : require('../assets/images/Transfers.png')} />
      ),
      title: 'TRANSFERS',
    },
    screen: TransferPage,
  },
  Recipients: {
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../assets/images/Recipients-Active.png') : require('../assets/images/Recipients.png')} />
      ),
      title: 'RECIPIENTS',
    },
    screen: RecipientPage,
  },
  Settings: {
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../assets/images/Settings-Active.png') : require('../assets/images/Settings.png')} />
      ),
      title: 'SETTINGS',
    },
    screen: SettingPage,
  },
}, {
  tabBarOptions: {
    showIcon: true,
    activeTintColor: ACTIVETINTCOLOR,
    inactiveTintColor: INACTIVETINTCOLOR,
    style: {
      backgroundColor: 'white',
    },
    iconStyle: { height: 35, width: '100%', padding: 0 },
    labelStyle: { margin: 0, padding: 0, fontSize: deviceWidth < 420 ? 10 : null },
    indicatorStyle: { backgroundColor: 'transparent' },
  },
  tabBarPosition: 'bottom',
});
