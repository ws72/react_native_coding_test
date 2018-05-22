import PropTypes from 'prop-types';

export default {
  /*
  When we pass styles it will either be an object literal, number (StyleSheet ref)
  or an array of either.
  */
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape(),
    PropTypes.number,
  ]),
};
