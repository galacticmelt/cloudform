import { createSelector } from 'reselect';
import { RootState } from '../../store';

const sliceSelector = (state: RootState) => state.combinedForm;

export const combinedFormSelector = createSelector(sliceSelector, (combinedForm) => ({
  phone: combinedForm.phone,
  email: combinedForm.email,
  nickname: combinedForm.nickname,
  name: combinedForm.name,
  surname: combinedForm.surname,
  sex: combinedForm.sex,
  advantages: combinedForm.advantages.map((step) => step.value),
  checkbox: combinedForm.checkbox.map((option) => Number(option)),
  radio: Number(combinedForm.radio),
  about: combinedForm.about
}));
