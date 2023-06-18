import { CombinedForm } from '../../../shared/common/types';

export interface CombinedFormState extends CombinedForm {
  loading: boolean;
  submitSuccess: boolean;
  submitError: {
    status: boolean;
    value: string;
  };
}
