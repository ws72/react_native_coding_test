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

// TODO: this component should container all the content of Rates Page
const RatePage = () => <View style={styles.container}><Text>RatePage</Text></View>;


export default RatePage;
