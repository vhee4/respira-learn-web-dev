import React from 'react';

import styles from './Chart.module.scss';
import ArrowHeadIcon from '../../../../../assets/svg_component/ArrowHeadIcon';
import RewardLineChart from './RewardLineChart';

const Chart = () => {
  const barSeries = [31, 31, 60, 29, 50, 47, 87, 56, 42, 69, 61, 39, 58, 41, 56]; // Example percentages
  const barCategory = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Ken',
    'Canopy',
    'Mike',
    'Gerald',
    'Thompson',
    'Andrew',
    'Izzy',
    'Tim',
    'Mark'
  ]; // Example names
  return (
    <div className={styles?.chartWrapper}>
      <div className={styles?.chartWrapper__top}>
        <h4 className={styles?.chartWrapper__title}>Top Performers</h4>
        <div className={styles?.chartWrapper__filterDropDown}>
          <h4 className={styles?.chartWrapper__filterText}>This Month</h4>
          <span className={styles?.chartWrapper__arrowIcon}>
            <ArrowHeadIcon stroke="white" />
          </span>
        </div>
      </div>
      <div>
        <RewardLineChart lineSeries={barSeries} lineCategory={barCategory} />
      </div>
    </div>
  );
};

export default Chart;
