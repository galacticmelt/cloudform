import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StepThreeFormData } from '../../../shared/common/types';
import { VALIDATION_MESSAGES } from '../../../shared/common/constants';
import TextArea from '../../../shared/components/text-area/text-area';
import Button from '../../../shared/components/button/button';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { combinedFormActions } from '../../../store/features/combinedForm/combinedForm.slice';
import styles from './step-three-form.module.scss';
import { stepThreeSchema } from '../../../shared/common/validation';

interface StepThreeFormProps {
  submitHandler: (...args: unknown[]) => void;
  backHandler: (...args: unknown[]) => void;
}

const StepThreeForm = ({ submitHandler, backHandler }: StepThreeFormProps) => {
  const { about } = useAppSelector((state) => state.combinedForm);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<StepThreeFormData>({
    reValidateMode: 'onChange',
    resolver: yupResolver(stepThreeSchema),
    defaultValues: { about }
  });

  const onSubmit: SubmitHandler<StepThreeFormData> = async ({ about }) => {
    dispatch(combinedFormActions.setCombinedFormData({ about }));
    submitHandler();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.stepThreeForm}>
      <TextArea
        {...register('about', { required: VALIDATION_MESSAGES.FIELD_REQUIRED })}
        id="field-about"
        defaultValue={about}
        label="About"
        placeholder="Placeholder"
        tip="Tip"
        errorText={errors.about?.message}
      />
      <div className={styles.formButtons}>
        <Button id="button-back" type="button" variant="outlined" onClick={backHandler}>
          Назад
        </Button>
        <Button id="button-send" type="submit">
          Далее
        </Button>
      </div>
    </form>
  );
};

export default StepThreeForm;
