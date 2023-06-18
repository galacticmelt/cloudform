export interface MainFormData {
  phone: string;
  email: string;
}

export interface StepOneFormData {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
}

export type Option = {
  label: string;
  value: string;
};

export interface StepTwoFormData {
  advantages: { value: string }[];
  checkbox: string[];
  radio: string;
}

export interface StepThreeFormData {
  about: string;
}

export type StepsFormData = StepOneFormData & StepTwoFormData & StepThreeFormData;

export type CombinedForm = StepsFormData & MainFormData;

type Sex = {
  MAN: 'man';
  WOMAN: 'woman';
};

export type CombinedFormForSubmit = {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: Sex;
  advantages: string[];
  checkbox: number[];
  radio: number;
  about: string;
};
