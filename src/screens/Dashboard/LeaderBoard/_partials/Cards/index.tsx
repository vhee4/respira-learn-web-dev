import React from 'react';

import { cardData } from './Cards.data';

import styles from './Cards.module.scss';
import { useAppSelector } from '../../../../../redux/hooks';

const Cards = () => {
  const { users } = useAppSelector((state) => state.auth);

  const cards = cardData({ userData: users });
  return (
    <div className={styles.cardsWrapper}>
      {cards?.map((data) => (
        <div key={data?.id} className={styles.cardsWrapper__card}>
          <h6 className={styles.cardsWrapper__headText}>{data?.headText}</h6>
          <p className={styles.cardsWrapper__subText}>{data?.subText}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
