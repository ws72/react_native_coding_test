import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import NewsCard from './NewsCard';
import { BODY_TEXT_COLOR_LIGHTER } from '../../config/colors';

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderColor: BODY_TEXT_COLOR_LIGHTER,
    borderWidth: 0.5,
  },
});

class NewsList extends Component {
  static defaultProps = {
    newsList: List([]),
  };

  static propTypes = {
    getAllNewsUpdate: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
    newsList: PropTypes.instanceOf(List),
  };

  state = {
    refreshing: false,
  }


  onListRefreshing = async () => {
    this.setState({ refreshing: true });
    await this.props.getAllNewsUpdate();
    this.setState({ refreshing: false });
  }

  keyExtractor = (item, index) => `${index}`;

  ItemSeparatorComponent = () => <View style={styles.separator} />;

  renderItem = ({ item }) => <NewsCard navigation={this.props.navigation} news={item} />;

  render() {
    const { placeholder } = styles;
    const { newsList } = this.props;
    return (
      newsList.size > 0 ? (
        <FlatList
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          data={newsList.toJS()}
          keyExtractor={this.keyExtractor}
          onRefresh={this.onListRefreshing}
          refreshing={this.state.refreshing}
          renderItem={this.renderItem}
        />
      ) : (
        <View style={placeholder}>
          <Text>
            No Updates Available
          </Text>
        </View>
      )
    );
  }
}


export default NewsList;
