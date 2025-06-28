/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IQuestions {
  question: string;
  options: string[];
  answer: string; // The correct answer
  selectedAnswer?: string;
}

export interface IQuestionData {
  questions: IQuestions[];
  percentage: string;
  score: string;
  level: string;
}

export interface IUserData {
  userRole: string;
}

interface IQuestionsSlice {
  questionsData: IQuestionData;
  userData: IUserData;
  userQuestions: IQuestions[];
}

const initialState: IQuestionsSlice = {
  questionsData: {
    questions: [],
    percentage: '',
    score: '',
    level: ''
  },
  userData: {
    userRole: ''
  },
  userQuestions: []
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestionsData: (state: IQuestionsSlice, action: PayloadAction<IQuestionData>) => {
      const { payload } = action;
      state.questionsData = payload;
    },
    setUserData: (state: IQuestionsSlice, action: PayloadAction<IUserData>) => {
      const { payload } = action;
      state.userData = payload;
    },
    setUserQuestions: (state: IQuestionsSlice, action: PayloadAction<IQuestions[]>) => {
      const { payload } = action;
      state.userQuestions = payload;
    }
  }
});

const { actions, reducer } = questionsSlice;

export const { setQuestionsData, setUserData, setUserQuestions } = actions;

export default reducer;
