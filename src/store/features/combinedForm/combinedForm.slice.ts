import { createSlice } from '@reduxjs/toolkit';
import { CombinedFormState } from './combinedForm.types';
import { submitForm } from './combinedForm.thunks';
import { EMPTY_STRING, COMBINED_FORM_INIT_STATE } from '../../../shared/common/constants';

const combinedFormSlice = createSlice({
  name: 'combinedForm',
  initialState: COMBINED_FORM_INIT_STATE as CombinedFormState,
  reducers: {
    setCombinedFormData(state, action) {
      return { ...state, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.pending, (state) => {
      state.submitError.status = false;
      state.submitError.value = EMPTY_STRING;
      state.loading = true;
    });
    builder.addCase(submitForm.fulfilled, (state, action) => {
      state.loading = false;
      state.submitSuccess = true;
    });
    builder.addCase(submitForm.rejected, (state, action) => {
      state.submitError.status = true;
      state.submitError.value = action.payload;
    });
  }
});

export const combinedFormActions = {
  submitForm,
  setCombinedFormData: combinedFormSlice.actions.setCombinedFormData
};

export default combinedFormSlice.reducer;
