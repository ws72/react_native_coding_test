import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// TODO: this component should container all the content of Settings Page
const SettingPage = () => <View style={styles.container}><Text>SettingPage</Text></View>;

export default SettingPage;
