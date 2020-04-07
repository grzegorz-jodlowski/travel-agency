import React from 'react';
import styles from './Contact.scss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor() {
    super();
    setInterval(() => this.forceUpdate(), (1000 * 60 * 10));
  }

  getContactDescription() {
    const currentDate = new Date();
    const currentHour = currentDate.getUTCHours();

    if (currentHour < 12 && currentHour >= 8) {
      return `${this.props.morningContactPerson} ${this.props.morningNumber}`;
    } else if (currentHour < 16 && currentHour >= 12) {
      return `${this.props.afternoonContactPerson} ${this.props.afternoonNumber}`;
    } else if (currentHour >= 16 && currentHour < 22) {
      return `${this.props.eveningContactPerson} ${this.props.eveningNumber}`;
    } else {
      return this.props.nightDescription;
    }
  }

  render() {
    return (
      <div className={styles.contact}>
        <Icon name='phone' /><span>{this.getContactDescription()}</span>
      </div>
    );
  }
}

Contact.propTypes = {
  morningContactPerson: PropTypes.string,
  morningNumber: PropTypes.string,
  afternoonContactPerson: PropTypes.string,
  afternoonNumber: PropTypes.string,
  eveningContactPerson: PropTypes.string,
  eveningNumber: PropTypes.string,
  nightDescription: PropTypes.string,
};

export default Contact;
