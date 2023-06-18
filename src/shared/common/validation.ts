import * as yup from 'yup';
import { VALIDATION_MESSAGES } from './constants';

export const mainFormSchema = yup.object({
  phone: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED).length(16),
  email: yup
    .string()
    .required(VALIDATION_MESSAGES.FIELD_REQUIRED)
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, VALIDATION_MESSAGES.WRONG_FORMAT)
});

export const stepOneSchema = yup.object({
  nickname: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED),
  name: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED),
  surname: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED),
  sex: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED)
});

export const stepTwoSchema = yup.object({
  advantages: yup
    .array()
    .of(
      yup.object().shape({
        value: yup
          .string()
          .required(VALIDATION_MESSAGES.FIELD_REQUIRED)
      })
    )
    .min(1, VALIDATION_MESSAGES.AT_LEAST_ONE_INPUT)
    .required()
  // checkboxOptions: yup
  //   .array()
  //   .of(yup.string())
  //   .min(1, VALIDATION_MESSAGES.AT_LEAST_ONE_OPTION)
  //   .required(),
  // radioOption: yup.string().required('Radio option is required')
});

export const stepThreeSchema = yup.object({
  about: yup.string().required(VALIDATION_MESSAGES.FIELD_REQUIRED)
});
