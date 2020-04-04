import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue, required }) => (
  <input
    type='text'
    className={styles.input}
    onChange={event => setOptionValue(event.currentTarget.value)}
    required={required}
  />
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionText;
