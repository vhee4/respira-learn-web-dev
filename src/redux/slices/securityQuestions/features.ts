import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/axios/api';
import { handleAxiosError } from '../../../utils/helpers/general/errorHandler';

// getSecurityQuestionsByUserRole
export const getSecurityQuestionsByUserRole = createAsyncThunk(
  'security-questions/:role',
  async ({ userRole }: { userRole: string }) => {
    try {
      const response = await api.get(`security-questions?userRole=${userRole}`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);
