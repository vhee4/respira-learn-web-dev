import React from 'react';

import { IQuestionData, IQuestions } from '../../redux/slices/questions/questionsSlice';
import GreenFlashIcon from '../../assets/svg_component/GreenFlashIcon';
import BadIcon from '../../assets/svg_component/BadIcon';

import styles from './QuestionsAndOptions.module.scss';

const QuestionsAndOptions = ({
  questionData,
  handleSelectAnswer,
  overrideSelect,
  showCorrections
}: {
  questionData?: IQuestionData;
  handleSelectAnswer?: (questionIndex: number, option: string) => void;
  overrideSelect?: boolean;
  showCorrections?: boolean;
}) => {
  const handleSelectOption = (questionIndex: number, option: string) => {
    if (overrideSelect) {
      return;
    }
    handleSelectAnswer?.(questionIndex, option);
  };

  const isSelectedAnswerWrong = (question: IQuestions) => {
    return question.selectedAnswer !== undefined && question.selectedAnswer !== question.answer;
  };

  return (
    <div className={styles.questionsAndOptions}>
      {questionData?.questions?.map((question: IQuestions, questionIndex: number) => (
        <div key={questionIndex} className={styles.questionsAndOptions__questionContainer}>
          <p className={styles.questionsAndOptions__question}>
            {questionIndex + 1}. {question.question}
          </p>

          <div className={styles.questionsAndOptions__optionsWrapper}>
            {question?.options?.map((option: string, index: number) => {
              const isCorrect = question?.answer === option;
              const isSelectedAnswer = option === question.selectedAnswer;

              return (
                <div key={index} className={styles.questionsAndOptions__optionsContainer}>
                  <div
                    className={`${styles.questionsAndOptions__optionWrapper} ${
                      question.selectedAnswer === option ? styles.selected : ''
                    }`}
                    style={{ cursor: `${overrideSelect ? '' : 'pointer'}` }}
                    onClick={() => {
                      handleSelectOption(questionIndex, option);
                    }}>
                    <div className={styles.questionsAndOptions__optionCheck}>
                      {question.selectedAnswer === option && (
                        <div className={styles.questionsAndOptions__innerCircle} />
                      )}
                    </div>
                    <p className={styles.questionsAndOptions__option}>{option}</p>
                  </div>
                  {showCorrections && (
                    <span>
                      {isCorrect ? (
                        <GreenFlashIcon />
                      ) : isSelectedAnswer && isSelectedAnswerWrong(question) ? (
                        <BadIcon />
                      ) : null}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionsAndOptions;
