import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ price, currentValue, limits, setOptionValue }) => (
  <div className={styles.input}>
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {` ${formatPrice(price)} of price`}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
