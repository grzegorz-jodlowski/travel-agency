import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcon = ({ values, required, currentValue, setOptionValue }) => (
  <div className={styles.component}>
    {required ? '' : (
      <div
        onClick={() => setOptionValue('')}
        value=''
        className={`${styles.icon}`}
      >
        <Icon name='times-circle' />
        {'none'}
      </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        className={`${styles.icon} ${(currentValue === value.id ? styles.iconActive : '')}`}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcon.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcon;
