export const selectIsModalOpen = (state) => state.modalsSlice.isModalOpen;
export const selectLoginModal = (state) => state.modalsSlice.loginModal;
export const selectRegistrationModal = (state) =>
  state.modalsSlice.registrationModal;
export const selectAppointmentModal = (state) =>
  state.modalsSlice.appointmentModal;

export const selectUser = (state) => state.authSlice.user;

// Selectors
export const selectNanniesPerPage = (state) =>
  state.nanniesSlice.nanniesPerPage;
export const selectNannies = (state) => state.nanniesSlice.nannies;
export const selectIsLoading = (state) => state.nanniesSlice.isLoading;
export const selectError = (state) => state.nanniesSlice.error;
export const selectFilter = (state) => state.nanniesSlice.filter;
export const selectFilteredNannies = (state) =>
  state.nanniesSlice.filteredNannies;
export const selectFavoriteNanny = (state) => state.nanniesSlice.favorites;
