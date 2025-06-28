import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSecurityQuestionsByUserRole } from './features';

//define the interface for all the states that authslice is going to be using
export interface SecurityQuestionsSlice {
  securityQuestions: any;
  isGettingSecurityQuestions: boolean;
}

const initialState: SecurityQuestionsSlice = {
  securityQuestions: {},
  isGettingSecurityQuestions: false
};

//create the slice
export const SecurityQuestionsSlice = createSlice({
  name: 'securityQuestions',
  initialState,
  reducers: {},

  // redux http auto reducers
  extraReducers: (builder) => {
    builder
      // security questions
      .addCase(getSecurityQuestionsByUserRole.pending, (state: SecurityQuestionsSlice) => {
        state.isGettingSecurityQuestions = true;
      })
      .addCase(getSecurityQuestionsByUserRole.rejected, (state: SecurityQuestionsSlice) => {
        state.isGettingSecurityQuestions = false;
      })
      .addCase(
        getSecurityQuestionsByUserRole.fulfilled,
        (state: SecurityQuestionsSlice, action: PayloadAction<any>) => {
          state.isGettingSecurityQuestions = false;
          state.securityQuestions = action.payload;
        }
      );
  }
});

export default SecurityQuestionsSlice.reducer;
