import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StepTwoFormData } from '../../../shared/common/types';
import Button from '../../../shared/components/button/button';
import RadioGroup from '../radio-group/radio-group';
import CheckboxGroup from '../checkbox-group/checkbox-group';
import { MOCK_OPTIONS } from '../../../shared/common/constants';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { combinedFormActions } from '../../../store/features/combinedForm/combinedForm.slice';
import { stepTwoSchema } from '../../../shared/common/validation';
import Advantages from '../advantages/advantages';
import styles from './step-two-form.module.scss';

interface StepTwoFormProps {
  submitHandler: () => void;
  backHandler: () => void;
}

export default function StepTwoForm({ submitHandler, backHandler }: StepTwoFormProps) {
  const { advantages, checkbox, radio } = useAppSelector((state) => state.combinedForm);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<StepTwoFormData>({
    defaultValues: { advantages, checkbox, radio },
    resolver: yupResolver(stepTwoSchema),
    reValidateMode: 'onChange'
  });

  const { fields, append, remove } = useFieldArray<StepTwoFormData>({
    control,
    name: 'advantages'
  });

  const onSubmit: SubmitHandler<StepTwoFormData> = async ({ advantages, checkbox, radio }) => {
    dispatch(combinedFormActions.setCombinedFormData({ advantages, checkbox, radio }));
    submitHandler();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.stepTwoForm}>
      <div className={styles.allFields}>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Advantages</label>
          <Advantages {...{ fields, append, remove, register, errors }} />
        </div>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Checkbox group</label>
          <CheckboxGroup options={MOCK_OPTIONS} {...register('checkbox')} />
          {<span className={styles.errorText}>{errors.checkbox?.message}</span>}
        </div>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Radio group</label>
          <RadioGroup options={MOCK_OPTIONS} {...register('radio')} />
        </div>
      </div>
      <div className={styles.formButtons}>
        <Button id="button-back" variant="outlined" onClick={backHandler}>
          Назад
        </Button>
        <Button id="button-next" type="submit">
          Далее
        </Button>
      </div>
    </form>
  );
}
