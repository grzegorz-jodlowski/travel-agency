import React from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div>
        <h3 className={styles.title}>Happy Hour</h3>
        <div className={styles.promoDescription}>Countdown</div>
      </div>
    );
  }
}

export default HappyHourAd;
