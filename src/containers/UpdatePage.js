import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageHeader, NewsList } from '../components/UpdatePage';
import { getAllNewsUpdate } from '../actions/newsUpdate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class UpdatePage extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    getAllNewsUpdate: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
    newsUpdates: PropTypes.instanceOf(List).isRequired,
  }

  componentDidMount() {
    this.props.getAllNewsUpdate();
  }


  render() {
    const { newsUpdates, navigation } = this.props;

    return (

      // TODO: need to consider the case when there is no news updates
      <View style={styles.container}>
        <PageHeader
          navigation={navigation}
          news={newsUpdates.get(0)}
        />
        <NewsList
          getAllNewsUpdate={this.props.getAllNewsUpdate}
          navigation={navigation}
          newsList={newsUpdates.shift()}
        />
      </View>
    );
  }
}

// TODO: the shape of state will change when more reducers are added in
const mapStateToProps = state => ({ newsUpdates: state });

export default connect(mapStateToProps, { getAllNewsUpdate })(UpdatePage);
