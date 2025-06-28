import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { IModal } from './Modal.types';
// import { useAppDispatch } from '../../redux/hooks';
// import {
//   setForgotPassModal,
//   setIsShowPassModal,
//   setUserResetOption,
//   setPreviousForgotPassModal
// } from '../../redux/slices/auth/forgotPassSlice';
// import { ReactComponent as ModalCloseIcon } from '../../assets/images/circled-close-icon.svg';
// import { ReactComponent as ModalBackIcon } from '../../assets/images/circled-arrow-icon.svg';
// import PayfiPrimaryLogo from '../../assets/svg_components/PayfiPrimaryLogo';
// import SuspenseLoader from '../Loader/SuspenseLoader';
import SuspenseLoader from '../SuspenseLoader';
import PrimaryLogo from '../../assets/svg_component/PrimaryLogo';

import ModalStyles from './Modal.module.scss';

const Modal = ({
  children,
  isShow,
  onClickAway,
  // onClose,
  // onBack,
  className,
  childrenClassName,
  contentClassName,
  isTopIcon,
  topIcon,
  isShowBackToLogin,
  isShowBackButton,
  isShowCloseIcon = true,
  closeClassName,
  isShowBottomLogo,
  loading
}: IModal) => {
  // const dispatch = useAppDispatch();

  //   const onLoginClick = () => {
  //     dispatch(setIsShowPassModal(false));
  //     dispatch(setUserResetOption(''));
  //     dispatch(setForgotPassModal(''));
  //     dispatch(setPreviousForgotPassModal(''));
  //   };

  if (!isShow) return null;

  return (
    <div className={`${ModalStyles.modal} ${className}`}>
      {loading ? (
        <div className={ModalStyles.modal__loader}>
          <SuspenseLoader />
        </div>
      ) : (
        <ClickAwayListener onClickAway={() => onClickAway()}>
          <div className={`${ModalStyles.modal__content}  ${contentClassName}`}>
            <div className={ModalStyles.modal__header}>
              {isShowBackButton && (
                <div className={ModalStyles.modal__back}>
                  {/* <ModalBackIcon className={ModalStyles.modal__backIcon} onClick={() => onBack()} /> */}
                </div>
              )}

              {isShowCloseIcon && (
                <div className={`${ModalStyles.modal__close} ${closeClassName}`}>
                  {/* <ModalCloseIcon
                    className={ModalStyles.modal__closeIcon}
                    onClick={() => onClose()}
                  /> */}
                </div>
              )}
            </div>

            <div className={`${ModalStyles.modal__children} ${childrenClassName}`}>
              {isTopIcon && <div className={ModalStyles.modal__topIcon}>{topIcon}</div>}

              {children}

              {isShowBackToLogin && (
                <p
                  // onClick={onLoginClick}
                  className={ModalStyles.modal__loginText}>
                  Back to Login
                </p>
              )}

              {isShowBottomLogo && (
                <div className={ModalStyles.modal__bottomLogo}>
                  <PrimaryLogo />
                </div>
              )}
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Modal;
