import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


class NewsDetailPage extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }


  // TODO: style title better
  static navigationOptions = ({ navigation }) => (
    {
      title: `${navigation.state.params.newsTitle}`,
    }
  )


  renderNewsBody = () => {
    const { navigation: { state: { params: { newsBody } } } } = this.props;
    return <Text>{newsBody}</Text>;
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderNewsBody()}
      </View>
    );
  }
}

export default NewsDetailPage;
