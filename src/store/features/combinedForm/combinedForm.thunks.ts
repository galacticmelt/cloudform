import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendFormData } from '../../../api/cloud-api';
import { CombinedFormForSubmit } from '../../../shared/common/types';

export const submitForm = createAsyncThunk(
  'steps/submitForm',
  async (data: CombinedFormForSubmit, { rejectWithValue }) => {
    try {
      return await sendFormData(data);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.name + ': ' + e.message);
        return rejectWithValue(e.message);
      }
    }
  }
);
