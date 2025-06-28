import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuestionsAndOptions, StyledButton, SuspenseLoader } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  IQuestionData,
  IQuestions,
  setQuestionsData
} from '../../../redux/slices/questions/questionsSlice';

import StopClockIcon from '../../../assets/svg_component/StopClockIcon';

import styles from './Quiz.module.scss';
import { rolePreset } from '../Home/_partials/SelectRoleForm/SelectRoleForm.data';

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { questionsData } = useAppSelector((state) => state.questions);
  const { user } = useAppSelector((state) => state.auth);
  const { isGettingSecurityQuestions } = useAppSelector((state) => state.securityQuestionsSlice);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const quizWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quizWrapperRef.current) {
      quizWrapperRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const calculateScoreAndPercentage = (questions: IQuestions[]) => {
    const totalQuestions = questions.length;
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (question.selectedAnswer === question.answer) {
        correctAnswers += 1;
      }
    });

    const percentage = `${(correctAnswers / totalQuestions) * 100}`;
    const score = `${correctAnswers / totalQuestions}`;

    return { percentage, score };
  };

  const handleSubmit = async (questions: IQuestionData) => {
    const { percentage, score } = calculateScoreAndPercentage(questions.questions);
    const formattedPercentage =
      Number(percentage) % 1 === 0 ? percentage : Number(percentage).toFixed(2);

    const payload: IQuestionData = {
      ...questionsData,
      percentage: formattedPercentage,
      score,
      level: ''
    };

    await dispatch(setQuestionsData(payload));
    navigate('/dashboard/performance-report');
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          handleSubmit(questionsData);
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

  const handleSelectAnswer = (questionIndex: number, answer: string) => {
    const updatedQuestions = questionsData?.questions?.map((question, index) => {
      if (index === questionIndex) {
        return { ...question, selectedAnswer: answer };
      }
      return question;
    });

    const payload: IQuestionData = {
      ...questionsData,
      questions: updatedQuestions
    };

    dispatch(setQuestionsData(payload));
  };

  return (
    <>
      {isGettingSecurityQuestions ? (
        <SuspenseLoader />
      ) : (
        <div className={styles.quizWrapper} ref={quizWrapperRef}>
          <div className={styles.quizWrapper__top}>
            <div className={styles.quizWrapper__topLeft}>
              <div className={styles.quizWrapper__topLeftHeadTextWrapper}>
                <h4 className={styles.quizWrapper__topLeftHeadText}>Here is your test</h4>
                <div className={styles.quizWrapper__topLeftBadge}>
                  {rolePreset[user?.role as string]}
                </div>
              </div>
              <p className={styles.quizWrapper__topLeftSubText}>
                Pick the correct answer to the follwing questions{' '}
              </p>
            </div>
            <div className={styles.quizWrapper__topRight}>
              <StopClockIcon />
              <span className={styles.quizWrapper__timer}>{`${formatTime(minutes)} : ${formatTime(
                seconds
              )}`}</span>
            </div>
          </div>

          <QuestionsAndOptions
            questionData={questionsData}
            handleSelectAnswer={handleSelectAnswer}
          />

          <div className={styles?.quizWrapper__btnWrapper}>
            <StyledButton
              title={'Submit'}
              className={styles?.quizWrapper__btn}
              type="submit"
              onClick={() => handleSubmit(questionsData)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
