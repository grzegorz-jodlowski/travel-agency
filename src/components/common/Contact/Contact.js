import React from 'react';
import styles from './Contact.scss';
import Icon from '../Icon/Icon';

const Contact = () => (
  <div className={styles.contact}>
    <Icon name='phone' /><span>678.243.8455</span>
  </div>
);

export default Contact;
