import React from 'react';

import {GetAllFlightsReturn} from '~/services/api/states/types';

import styles from './FlightCard.module.scss';

const FlightCard: React.FC<GetAllFlightsReturn> = ({
  time,
  airport,
  arriving,
  departing,
}) => (
  <div className={styles.container}>
    <div className={styles.container__content}>
      <div>
        <p>AIRPORT</p>
        <p>TIME</p>
        <p>Arriving</p>
        <p>Departing</p>
      </div>
      <div>
        <p>{airport}</p>
        <p>{arriving}</p>
        <p>{time}</p>
        <p>{departing}</p>
      </div>
    </div>
  </div>
);

export default FlightCard;
