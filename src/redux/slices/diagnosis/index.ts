import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { askDiagnosis, getDiagnosisHistory } from './features';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

interface DiagnosisState {
  history: ChatMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: DiagnosisState = {
  history: [],
  loading: false,
  error: null
};

export const diagnosisSlice = createSlice({
  name: 'diagnosis',
  initialState,
  reducers: {
    clearDiagnosis: (state) => {
      state.history = [];
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(askDiagnosis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(askDiagnosis.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // Use history from backend for full chat so FE and BE stay in sync
        state.history = action.payload.history;
      })
      .addCase(askDiagnosis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to get diagnosis';
      })
      .addCase(getDiagnosisHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDiagnosisHistory.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.history = action.payload.history;
      })
      .addCase(getDiagnosisHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load history';
      });
  }
});

export default diagnosisSlice.reducer;
export const { clearDiagnosis } = diagnosisSlice.actions;
