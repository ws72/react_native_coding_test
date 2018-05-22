import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { BODY_TEXT_COLOR } from '../../config/colors';
import { SIZING_NORMAL } from '../../config/sizing';
import customPropTypes from '../../helpers/customPropTypes';

const styles = StyleSheet.create({
  root: {
    color: BODY_TEXT_COLOR,
    fontSize: SIZING_NORMAL,
    fontFamily: 'CiutadellaRounded',
  },
});

class BodyText extends Component {
  static defaultProps = {
    numberOfLines: null,
    style: {},
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    numberOfLines: PropTypes.number,
    style: customPropTypes.style,
  };

  render() {
    const { numberOfLines, style } = this.props;

    return (
      <Text
        numberOfLines={numberOfLines}
        style={[styles.root, style]}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default BodyText;
