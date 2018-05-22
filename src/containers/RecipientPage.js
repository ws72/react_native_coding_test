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

// TODO: this component should container all the content of Recipient Page
const RecipientPage = () => <View style={styles.container}><Text>RecipientPage</Text></View>;

export default RecipientPage;
