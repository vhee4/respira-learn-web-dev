import React from 'react';

import { WelcomeCard, SelectRoleForm } from './_partials';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles?.homeWrapper}>
      <WelcomeCard />
      <SelectRoleForm />
    </div>
  );
};

export default Home;
