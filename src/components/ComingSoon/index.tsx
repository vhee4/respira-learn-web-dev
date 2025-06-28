import React from 'react';

import UnderConstruction from '../../assets/svg_component/UnderConstruction';

import ComingSoonStyles from './ComingSoon.module.scss';

const ComingSoon = () => {
  return (
    <div className={ComingSoonStyles.comingSoon}>
      <div className={ComingSoonStyles.comingSoon__image}>
        <UnderConstruction />
      </div>
      <h5 className={ComingSoonStyles.comingSoon__headText}>Coming Soon</h5>
      <p className={ComingSoonStyles.comingSoon__subText}>
        We’ll let you know when we are Launching
      </p>
    </div>
  );
};

export default ComingSoon;
