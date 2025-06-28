import React from 'react';

import GlobeImg from '../../../../../assets/svg_component/GlobeImg';
import { useAppSelector } from '../../../../../redux/hooks';

import styles from './WelcomeCard.module.scss';

const WelcomeCard = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className={styles?.WelcomeCardWrapper}>
      <div className={styles?.WelcomeCardWrapper__left}>
        <h4 className={styles?.WelcomeCardWrapper__greetings}>
          Hello {user?.firstName} {user?.lastName}.
        </h4>
        <p className={styles?.WelcomeCardWrapper__message}>
          Welcome to Respira Learn, Your AI-Powered Respiratory Training Hub! Sharpen your skills, save lives, 
          and advance respiratory care with our intelligent training platform.
        </p>
      </div>
      <div className={styles?.WelcomeCardWrapper__right}>
        <GlobeImg />
      </div>
    </div>
  );
};

export default WelcomeCard;
