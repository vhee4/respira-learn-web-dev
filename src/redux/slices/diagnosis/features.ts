import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/axios/api';
import { handleAxiosError } from '../../../utils/helpers/general/errorHandler';

// Send a new diagnosis prompt
export const askDiagnosis = createAsyncThunk('diagnosis/ask', async (message: string) => {
  try {
    const res = await api.post('diagnosis/ask', { message });
    return res.data; // { answer, history, sessionId }
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
});

// Get full diagnosis history
export const getDiagnosisHistory = createAsyncThunk('diagnosis/history', async () => {
  try {
    const res = await api.get('diagnosis/history');
    return res.data; // { history }
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
});
