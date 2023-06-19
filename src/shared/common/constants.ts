import { Option } from './types';

export const EMPTY_STRING = '';
export const DEFAULT_RADIO_VALUE = '1';

export const VALIDATION_MESSAGES = {
  FIELD_REQUIRED: 'Это поле обязательно к заполнению',
  AT_LEAST_ONE_INPUT: 'Добавьте хотя бы одно поле',
  AT_LEAST_ONE_OPTION: 'Выберите хотя бы один вариант',
  WRONG_EMAIL_FORMAT: 'Введите существущий электронный адрес',
  WRONG_PHONE_FORMAT: 'Введите полный номер телефона',
  MAX_30: 'Максимальная длина 30 символов',
  MAX_50: 'Максимальная длина 50 символов',
  FORBIDDEN_SYMBOL: 'Недопустимые символы'
};

export const EMAIL_VALIDATION = {
  required: 'Email is required',
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    message: 'Please enter valid email'
  }
};

export const PASS_VALIDATION = {
  required: 'Password is required',
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Only latin chars are allowed';
    }
    return true;
  }
};

export const MOCK_OPTIONS: Option[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' }
];

export const NEW_ADVANTAGE = { value: EMPTY_STRING };

export const INITIAL_ADVANTAGES = [
  { ...NEW_ADVANTAGE },
  { ...NEW_ADVANTAGE },
  { ...NEW_ADVANTAGE }
];

export const SEX_OPTIONS = [
  { name: 'Man', value: 'man' },
  { name: 'Woman', value: 'woman' }
];

export const COMBINED_FORM_INIT_STATE = {
  phone: EMPTY_STRING,
  email: EMPTY_STRING,
  nickname: EMPTY_STRING,
  name: EMPTY_STRING,
  surname: EMPTY_STRING,
  sex: EMPTY_STRING,
  advantages: [{ value: EMPTY_STRING }, { value: EMPTY_STRING }, { value: EMPTY_STRING }],
  checkbox: [],
  radio: DEFAULT_RADIO_VALUE,
  about: EMPTY_STRING,
  loading: false,
  submitSuccess: false,
  submitError: {
    status: false,
    value: EMPTY_STRING
  }
};
