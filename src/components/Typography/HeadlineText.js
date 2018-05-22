import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { HEADER_TEXT_COLOR } from '../../config/colors';
import { SIZING_LARGE } from '../../config/sizing';
import customPropTypes from '../../helpers/customPropTypes';

const styles = StyleSheet.create({
  root: {
    color: HEADER_TEXT_COLOR,
    fontSize: SIZING_LARGE,
    fontFamily: 'CiutadellaRounded',
  },
});

class HeadlineText extends Component {
  static defaultProps = {
    style: {},
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    style: customPropTypes.style,
  };

  render() {
    const { style } = this.props;

    return (
      <Text style={[styles.root, style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default HeadlineText;
