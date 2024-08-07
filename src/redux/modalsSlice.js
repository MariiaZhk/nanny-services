import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    isModalOpen: false,
    loginModal: false,
    registrationModal: false,
    appointmentModal: false,
    logoutModal: false,
    pleaseLoginModal: false,
  },

  reducers: {
    changeIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    changeLoginModal: (state, { payload }) => {
      state.loginModal = payload;
    },
    changeRegistrationModal: (state, { payload }) => {
      state.registrationModal = payload;
    },
    changeAppointmentModal: (state, { payload }) => {
      state.appointmentModal = payload;
    },
    changeLogoutModal: (state, { payload }) => {
      state.logoutModal = payload;
    },
    changePleaseLoginModal: (state, { payload }) => {
      state.pleaseLoginModal = payload;
    },
    closeModals: (state, { payload }) => {
      state.isModalOpen = payload;
      state.loginModal = payload;
      state.registrationModal = payload;
      state.appointmentModal = payload;
      state.logoutModal = payload;
      state.pleaseLoginModal = payload;
    },
  },
});

export const modalsReducer = modalsSlice.reducer;
export const {
  changeIsModalOpen,
  changeLoginModal,
  changeRegistrationModal,
  changeAppointmentModal,
  changeLogoutModal,
  changePleaseLoginModal,
  closeModals,
} = modalsSlice.actions;
