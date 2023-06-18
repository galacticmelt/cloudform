import { useForm, SubmitHandler } from 'react-hook-form';
import { StepOneFormData } from '../../../shared/common/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SEX_OPTIONS, VALIDATION_MESSAGES } from '../../../shared/common/constants';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import Select from '../../../shared/components/select/select';
import styles from './step-one-form.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { combinedFormActions } from '../../../store/features/combinedForm/combinedForm.slice';
import { stepOneSchema } from '../../../shared/common/validation';

interface StepOneFormProps {
  nextHandler: (...args: unknown[]) => void;
  backHandler: (...args: unknown[]) => void;
}

export const StepOneForm = ({ nextHandler, backHandler }: StepOneFormProps) => {
  const { nickname, name, surname, sex } = useAppSelector((state) => state.combinedForm);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<StepOneFormData>({
    defaultValues: { nickname, name, surname, sex },
    resolver: yupResolver(stepOneSchema),
    reValidateMode: 'onChange'
  });

  const onSubmit: SubmitHandler<StepOneFormData> = async ({ nickname, name, surname, sex }) => {
    dispatch(combinedFormActions.setCombinedFormData({ nickname, name, surname, sex }));
    nextHandler();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.stepOneForm}>
      <div className={styles.allFields}>
        <TextInput
          id="field-nickname"
          label="Nickname"
          tip="Nickname"
          errorText={errors.nickname?.message}
          {...register('nickname', { required: VALIDATION_MESSAGES.FIELD_REQUIRED })}
        />
        <TextInput
          id="field-name"
          label="Name"
          tip="Name"
          errorText={errors.name?.message}
          {...register('name', { required: VALIDATION_MESSAGES.FIELD_REQUIRED })}
        />
        <TextInput
          id="field-sername"
          label="Surname"
          tip="Surname"
          errorText={errors.surname?.message}
          {...register('surname', { required: VALIDATION_MESSAGES.FIELD_REQUIRED })}
        />
        <Select
          id="field-sex"
          placeholderOption="Не выбрано"
          defaultValue={sex}
          options={SEX_OPTIONS}
          label="Sex"
          tip="Sex"
          errorText={errors.sex?.message}
          {...register('sex', { required: VALIDATION_MESSAGES.FIELD_REQUIRED })}
        />
      </div>
      <div className={styles.formButtons}>
        <Button id="button-back" type="button" variant="outlined" onClick={backHandler}>
          Назад
        </Button>
        <Button id="button-next" type="submit">
          Далее
        </Button>
      </div>
    </form>
  );
};

StepOneForm.displayName = 'StepOneForm';

export default StepOneForm;
