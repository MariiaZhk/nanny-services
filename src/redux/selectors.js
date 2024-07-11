export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectLoginModal = (state) => state.modalsSlice.loginModal;
export const selectPleaseLoginModal = (state) =>
  state.modalsSlice.pleaseLoginModal;
export const selectRegistrationModal = (state) =>
  state.modalsSlice.registrationModal;
export const selectAppointmentModal = (state) =>
  state.modalsSlice.appointmentModal;
export const selectLogoutModal = (state) => state.modalsSlice.logoutModal;

export const selectUser = (state) => state.authSlice.user;
export const selectFavorites = (state) => state.authSlice.favorites;

export const selectNanniesPerPage = (state) =>
  state.nanniesSlice.nanniesPerPage;
export const selectNannies = (state) => state.nanniesSlice.nannies;
export const selectFilter = (state) => state.nanniesSlice.filter;
export const selectFilteredNannies = (state) =>
  state.nanniesSlice.filteredNannies;
export const selectFilteredFavorites = (state) =>
  state.nanniesSlice.filteredFavorites;
// export const selectIsLoadMore = (state) => state.nanniesSlice.isLoadMore;

export const selectError = (state) => state.globalSlice.error;
export const selectIsLoading = (state) => state.globalSlice.isLoading;
