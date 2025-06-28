import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDashboardSlice {
  isShowDashboardModal: boolean;
  activeDashboardModal:
    | 'logoutModal'
    | 'phoneInputModal'
    | 'verifyPhoneModal'
    | 'complianceModal'
    | 'unlockCreditModal'
    | 'guaranteeOptionModal'
    | 'getInTouchModal'
    | 'securityQPasswordModal'
    | 'securityQuestionModal'
    | 'securityQOtpModal'
    | 'appLoadingModal'
    | 'creditScoreComingSoonModal'
    | 'generateRentReportComingSoonModal'
    | '';
  refetchCompliance: boolean;
  isSideBarSubTab: {
    [key: string]: boolean;
  };
  securityQuestionPassData: string;
  securityQuestionMode: 'reset' | 'input';
  securityQuestionResetData: {
    securityQuestion: string;
    securityAnswer: string;
  };
  activePage: string;
}

const initialState: IDashboardSlice = {
  isShowDashboardModal: false,
  activeDashboardModal: '',
  refetchCompliance: false,
  isSideBarSubTab: {
    'Transactions ': false
  },
  securityQuestionPassData: '',
  securityQuestionMode: 'input',
  securityQuestionResetData: {
    securityQuestion: '',
    securityAnswer: ''
  },
  activePage: ''
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setIsShowDashboardModal: (state: IDashboardSlice, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.isShowDashboardModal = payload;
    },
    setActiveDashboardModal: (
      state: IDashboardSlice,
      action: PayloadAction<
        | 'logoutModal'
        | 'phoneInputModal'
        | 'verifyPhoneModal'
        | 'complianceModal'
        | 'unlockCreditModal'
        | 'guaranteeOptionModal'
        | 'getInTouchModal'
        | 'securityQPasswordModal'
        | 'securityQuestionModal'
        | 'securityQOtpModal'
        | 'appLoadingModal'
        | 'creditScoreComingSoonModal'
        | 'generateRentReportComingSoonModal'
        | ''
      >
    ) => {
      const { payload } = action;
      state.activeDashboardModal = payload;
    },
    setRefetchCompliance: (state: IDashboardSlice, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.refetchCompliance = payload;
    },
    setIsSideBarSubTab: (
      state: IDashboardSlice,
      action: PayloadAction<{ key: string; value: boolean }>
    ) => {
      const { key, value } = action.payload;
      state.isSideBarSubTab[key] = value;
    },
    resetIsSideBarSubTab: (state: IDashboardSlice) => {
      Object.keys(state.isSideBarSubTab).forEach((key) => {
        state.isSideBarSubTab[key] = false;
      });
    },
    setSecurityQuestionPassData: (state: IDashboardSlice, action: PayloadAction<string>) => {
      const { payload } = action;
      state.securityQuestionPassData = payload;
    },
    setSecurityQuestionMode: (state: IDashboardSlice, action: PayloadAction<'reset' | 'input'>) => {
      const { payload } = action;
      state.securityQuestionMode = payload;
    },
    setSecurityQuestionResetData: (
      state: IDashboardSlice,
      action: PayloadAction<{ securityQuestion: string; securityAnswer: string }>
    ) => {
      const { payload } = action;
      state.securityQuestionResetData = payload;
    },
    setActivePage: (state: IDashboardSlice, action: PayloadAction<string>) => {
      const { payload } = action;
      state.activePage = payload;
    }
  }
});

const { actions, reducer } = dashboardSlice;

export const {
  setIsShowDashboardModal,
  setActiveDashboardModal,
  setRefetchCompliance,
  setIsSideBarSubTab,
  resetIsSideBarSubTab,
  setSecurityQuestionPassData,
  setSecurityQuestionMode,
  setSecurityQuestionResetData,
  setActivePage
} = actions;

export default reducer;
