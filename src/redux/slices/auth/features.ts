import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUserTokenCookie } from '../../../utils/helpers/auth/cookieUtility';
import api from '../../../utils/axios/api';
import { handleAxiosError } from '../../../utils/helpers/general/errorHandler';

// Login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.post('auth/login', { email, password });
      setUserTokenCookie(response.data.token);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Register
export const register = createAsyncThunk(
  'auth/register',
  async ({
    firstName,
    lastName,
    email,
    password
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await api.post('auth/register', { firstName, lastName, email, password });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Verify Otp
export const verifyOtp = createAsyncThunk(
  'auth/verify-otp',
  async ({ email, otp }: { email: string; otp: string }) => {
    try {
      const response = await api.post('auth/verify-otp', { email, otp });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Resend Otp
export const resendOtp = createAsyncThunk('auth/resend-otp', async (email: string) => {
  try {
    const response = await api.post('auth/resend-otp', {
      email
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
});

// Verify Token
export const verifyToken = createAsyncThunk(
  'auth/verifyToken',
  async ({ token, email }: { token: string; email: string }) => {
    try {
      const response = await api.get(`auth/verify/${email}/${token}`);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Get users
export const getAllUsers = createAsyncThunk('users', async () => {
  try {
    const response = await api.get('users');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
});

// Get user details
export const getUserDetails = createAsyncThunk('user', async () => {
  try {
    const response = await api.get('user');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
});

// Send nudge
export const sendBehavioralNudge = createAsyncThunk(
  'user/nudge',
  async (score: string | number) => {
    try {
      const response = await api.post('user/nudge', {
        score
      });
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);

// Get user profile
export const getUserProfile = createAsyncThunk('users/me/profile', async () => {
  try {
    const response = await api.get('users/me/profile');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
});

// Update user role
export const updateUserRole = createAsyncThunk(
  'user/role',
  async (payload: { newRole: string }) => {
    try {
      const response = await api.put(`user/role`, payload);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
    }
  }
);
