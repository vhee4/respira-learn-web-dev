import React from 'react';

import { Cards, Chart, TopPerformersRecord } from './_partials';

import styles from './LeaderBoard.module.scss';

const LeaderBoard = () => {
  return (
    <div className={styles.leaderboardWrapper}>
      <Cards />
      <Chart />
      <TopPerformersRecord />
    </div>
  );
};

export default LeaderBoard;
