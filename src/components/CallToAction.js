import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HEADER_TEXT_COLOR } from '../config/colors';
import { BodyText } from './Typography';

const styles = StyleSheet.create({
  root: {
    color: HEADER_TEXT_COLOR,
    marginLeft: 10,
    marginRight: 10,
  },
});

function CallToAction({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <BodyText style={styles.root}>{title}</BodyText>
    </TouchableOpacity>
  );
}

CallToAction.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CallToAction;
