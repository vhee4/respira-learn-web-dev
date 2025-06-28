import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllUsers,
  getUserDetails,
  login,
  register,
  resendOtp,
  sendBehavioralNudge,
  updateUserRole,
  verifyOtp,
  verifyToken
} from './features';
import { User } from './interface';
import { removeUserTokenCookie } from '../../../utils/helpers/auth/cookieUtility';

//define the interface for all the states that authslice is going to be using
export interface AuthSliceState {
  isAuthenticated: boolean;
  users: User[];
  user: User;
  isLoading: boolean;
  isGettingTokenFromGoogleCallback: boolean;
  isLoadingUser?: boolean;
  profile: User;
  isVerifyingUserData: boolean;
  userVerifiedData: any;
  isUpdatingUserRole: boolean;

  isRegisteringUser: boolean;
  isVerifyingOtp: boolean;
  isResendingOtp: boolean;
  isSendingBehavioralNudge: boolean;
  isGettingAllUsers: boolean;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  users: [],
  user: {},
  isLoading: false,
  isGettingTokenFromGoogleCallback: false,
  isLoadingUser: true,
  profile: {},
  isVerifyingUserData: false,
  userVerifiedData: {},
  isUpdatingUserRole: false,
  isRegisteringUser: false,
  isVerifyingOtp: false,
  isResendingOtp: false,
  isSendingBehavioralNudge: false,
  isGettingAllUsers: false
};

//create the slice
export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state: AuthSliceState) => {
      removeUserTokenCookie();
      state.isAuthenticated = false;
      state.profile = {};
      state.user = {};
    }
  },

  // redux http auto reducers
  extraReducers: (builder) => {
    builder
      // register
      .addCase(register.pending, (state: AuthSliceState) => {
        state.isRegisteringUser = true;
      })
      .addCase(register.fulfilled, (state: AuthSliceState) => {
        state.isRegisteringUser = false;
      })
      .addCase(register.rejected, (state: AuthSliceState) => {
        state.isRegisteringUser = false;
      })
      // login
      .addCase(login.pending, (state: AuthSliceState) => {
        // remove previous token
        removeUserTokenCookie();
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state: AuthSliceState) => {
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state: AuthSliceState) => {
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      // verify token
      .addCase(verifyOtp.pending, (state: AuthSliceState) => {
        state.isVerifyingOtp = true;
      })
      .addCase(verifyOtp.fulfilled, (state: AuthSliceState) => {
        state.isVerifyingOtp = false;
      })
      .addCase(verifyOtp.rejected, (state: AuthSliceState) => {
        state.isVerifyingOtp = false;
      })
      // resend otp
      .addCase(resendOtp.pending, (state: AuthSliceState) => {
        state.isResendingOtp = true;
      })
      .addCase(resendOtp.fulfilled, (state: AuthSliceState) => {
        state.isResendingOtp = false;
      })
      .addCase(resendOtp.rejected, (state: AuthSliceState) => {
        state.isResendingOtp = false;
      })
      // users
      .addCase(getAllUsers.pending, (state: AuthSliceState) => {
        state.isGettingAllUsers = true;
      })
      .addCase(getAllUsers.rejected, (state: AuthSliceState) => {
        state.isGettingAllUsers = false;
      })
      .addCase(getAllUsers.fulfilled, (state: AuthSliceState, action: PayloadAction<any>) => {
        state.isGettingAllUsers = false;
        state.users = action.payload.data;
      })
      // user data
      .addCase(getUserDetails.rejected, (state: AuthSliceState) => {
        removeUserTokenCookie();
        state.isLoadingUser = false;
        state.isAuthenticated = false;
      })
      .addCase(getUserDetails.fulfilled, (state: AuthSliceState, action: PayloadAction<any>) => {
        state.isLoadingUser = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;
      })
      // update user role
      .addCase(updateUserRole.pending, (state: AuthSliceState) => {
        state.isUpdatingUserRole = true;
      })
      .addCase(updateUserRole.fulfilled, (state: AuthSliceState) => {
        state.isUpdatingUserRole = false;
      })
      .addCase(updateUserRole.rejected, (state: AuthSliceState) => {
        state.isUpdatingUserRole = false;
      })
      // send nudge
      .addCase(sendBehavioralNudge.pending, (state: AuthSliceState) => {
        state.isSendingBehavioralNudge = true;
      })
      .addCase(sendBehavioralNudge.fulfilled, (state: AuthSliceState) => {
        state.isSendingBehavioralNudge = false;
      })
      .addCase(sendBehavioralNudge.rejected, (state: AuthSliceState) => {
        state.isSendingBehavioralNudge = false;
      });
  }
});

export default AuthSlice.reducer;

export const { signOut } = AuthSlice.actions;
