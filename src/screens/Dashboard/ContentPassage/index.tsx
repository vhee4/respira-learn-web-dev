import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { StyledButton } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { IQuestionData, setQuestionsData } from '../../../redux/slices/questions/questionsSlice';
import { getSecurityQuestionsByUserRole } from '../../../redux/slices/securityQuestions/features';
import { ERROR_OCCURED_MESSAGE } from '../../../utils/constant';
import useToast from '../../../utils/helpers/general/useToast';
import { contentBasedOnRole } from './ContentPassage.data';

import StopClockIcon from '../../../assets/svg_component/StopClockIcon';

import styles from './ContentPassage.module.scss';
import { rolePreset } from '../Home/_partials/SelectRoleForm/SelectRoleForm.data';

const ContentPassage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { user } = useAppSelector((state) => state.auth);
  const { questionsData } = useAppSelector((state) => state.questions);

  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  const handleGetSecurityQuestionByRole = async (
    userRole: string,
    dispatch: ReturnType<typeof useAppDispatch>
  ) => {
    const actionResult = await dispatch(getSecurityQuestionsByUserRole({ userRole }));
    if (getSecurityQuestionsByUserRole.fulfilled.match(actionResult)) {
      const { status, data, message } = actionResult.payload;
      if (status && status === 200) {
        toast.success(message);
        const payload: IQuestionData = {
          ...questionsData,
          questions: data[0]?.questions
        };

        await dispatch(setQuestionsData(payload));
        navigate('/dashboard/quiz');
      }
    } else if (getSecurityQuestionsByUserRole.rejected.match(actionResult)) {
      const errorMessage = actionResult.error?.message || ERROR_OCCURED_MESSAGE;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          handleGetSecurityQuestionByRole(user?.role as string, dispatch);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <>
      {user?.role === '' ? (
        <div>
          <p>No user role found, go back to dashboard and select a role</p>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      ) : (
        <div className={styles.contentPassageWrapper}>
          <div className={styles.contentPassageWrapper__top}>
            <div className={styles.contentPassageWrapper__topLeft}>
              <div className={styles.contentPassageWrapper__topLeftHeadTextWrapper}>
                <h4 className={styles.contentPassageWrapper__topLeftHeadText}>
                  Your Reading Passage
                </h4>
                <div className={styles.contentPassageWrapper__topLeftBadge}>
                  {rolePreset[user?.role as string]}
                </div>
              </div>
              <p className={styles.contentPassageWrapper__topLeftSubText}>
                Please read the passage below carefully. Afterward, you’ll be able to answer the
                cybersecurity question based on the information provided.
              </p>
            </div>
            <div className={styles.contentPassageWrapper__topRight}>
              <StopClockIcon />
              <span className={styles.contentPassageWrapper__timer}>{`${formatTime(
                minutes
              )} : ${formatTime(seconds)}`}</span>
            </div>
          </div>

          <div>
            <article
              className={styles.contentPassageWrapper__passage}
              dangerouslySetInnerHTML={{
                __html: contentBasedOnRole[user?.role as string]
              }}
            />
          </div>

          <div className={styles?.contentPassageWrapper__btnWrapper}>
            <StyledButton
              title={'Take a Quiz'}
              className={styles?.contentPassageWrapper__btn}
              type="button"
              onClick={() => handleGetSecurityQuestionByRole(user?.role as string, dispatch)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ContentPassage;
