import React from 'react';
import PropTypes from 'prop-types';


import styles from './OrderSummary.scss';

const OrderSummary = ({ tripCost }) => (
  <h2 className={styles.component}>
    Total: <strong>{tripCost}</strong>
  </h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
};

export default OrderSummary;
