import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NEW_ADVANTAGE } from '../../../shared/common/constants';
import { StepTwoFormData } from '../../../shared/common/types';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import Checkbox from '../../../shared/components/checkbox/checkbox';
import Radio from '../../../shared/components/radio/radio';
import { MOCK_OPTIONS } from '../../../shared/common/constants';
import { AddIcon, BucketIcon } from '../../../assets/vector-images';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { combinedFormActions } from '../../../store/features/combinedForm/combinedForm.slice';
import { stepTwoSchema } from '../../../shared/common/validation';
import styles from './step-two-form.module.scss';

interface StepTwoFormProps {
  submitHandler: (...args: unknown[]) => void;
  backHandler: (...args: unknown[]) => void;
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

  const {
    fields: advantagesFields,
    append,
    remove
  } = useFieldArray<StepTwoFormData>({
    control,
    name: 'advantages'
  });

  const onSubmit: SubmitHandler<StepTwoFormData> = async ({ advantages, checkbox, radio }) => {
    dispatch(combinedFormActions.setCombinedFormData({ advantages, checkbox, radio }));
    submitHandler();
  };

  if (errors) console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.stepTwoForm}>
      <div className={styles.allFields}>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Advantages</label>
          {<span className={styles.errorText}>{errors.advantages?.message}</span>}
          {advantagesFields.map((field, index) => {
            return (
              <div className={styles.inputWithIcon} key={field.id}>
                <TextInput
                  id={`field-advantages-${index}`}
                  errorText={errors?.advantages?.[index]?.value?.message}
                  {...register(`advantages.${index}.value`)}
                />
                <div
                  id={`button-remove-${index}`}
                  onClick={() => remove(index)}
                  className={styles.iconWrapper}
                >
                  <BucketIcon />
                </div>
              </div>
            );
          })}
          <Button
            id="button-add"
            variant="outlined"
            onClick={() => append(NEW_ADVANTAGE)}
            style={{ padding: '16px', width: 44 }}
          >
            <AddIcon />
          </Button>
        </div>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Checkbox group</label>
          <div className={styles.checkboxGroup}>
            {MOCK_OPTIONS.map(({ label, value }, index) => {
              return (
                <Checkbox
                  id={`field-checkbox-group-option-${index}`}
                  key={value}
                  label={label}
                  value={value}
                  {...register('checkbox')}
                />
              );
            })}
          </div>
          {<span className={styles.errorText}>{errors.checkbox?.message}</span>}
        </div>
        <div className={styles.sectionWrapper}>
          <label className={styles.sectionLabel}>Radio group</label>
          <div className={styles.radioGroup}>
            {MOCK_OPTIONS.map(({ label, value }, index) => {
              return (
                <Radio
                  id={`field-radio-group-option-${index}`}
                  key={value}
                  value={value}
                  label={label}
                  {...register('radio')}
                />
              );
            })}
          </div>
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
