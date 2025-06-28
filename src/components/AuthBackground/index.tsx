import React from 'react';

import { IAuthBackgroundWrapper } from './AuthBackgroundWrapper.types';

import BgFadeDesign from '../../assets/svg_component/BgFadeDesign';
import BgFadeDesignRight from '../../assets/svg_component/BgFadeDesignRight';
import PrimaryLogo from '../../assets/svg_component/PrimaryLogo';

import styles from './AuthBackground.module.scss';

const AuthBackground = ({
  children,
  headText,
  subText,
  customSubTextClassName
}: IAuthBackgroundWrapper) => {
  return (
    <div className={styles?.authBackgroundWrapper}>
      <div className={styles?.authBackgroundWrapper__content}>
        <div className={styles?.authBackgroundWrapper__leftBgDesign}>
          <BgFadeDesign />
        </div>
        <div className={styles?.authBackgroundWrapper__cardWrapper}>
          <div className={styles?.authBackgroundWrapper__logo}>
            <PrimaryLogo className='w-[100px] h-[1px]' />
            {/* <img src="/logo.png" alt="Logo" width={100} height={100} /> */}
          </div>

          <div className={styles?.authBackgroundWrapper__formContainer}>
            <div className={styles?.authBackgroundWrapper__textContainer}>
              <h4 className={styles?.authBackgroundWrapper__headText}>{headText}</h4>
              <p className={customSubTextClassName || styles?.authBackgroundWrapper__subText}>
                {subText}
              </p>
            </div>
            <div className={styles?.authBackgroundWrapper__children}>{children}</div>
          </div>
        </div>
        <div className={styles?.authBackgroundWrapper__rightBgDesign}>
          <BgFadeDesignRight />
        </div>
      </div>
    </div>
  );
};

export default AuthBackground;
