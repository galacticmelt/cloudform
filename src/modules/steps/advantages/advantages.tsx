import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import {
  FieldArrayWithId,
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldErrors
} from 'react-hook-form';
import { StepTwoFormData } from '../../../shared/common/types';
import { NEW_ADVANTAGE } from '../../../shared/common/constants';
import { BucketIcon, AddIcon } from '../../../assets/vector-images';
import styles from './advantages.module.scss';

interface AdvantagesProps {
  fields: FieldArrayWithId<StepTwoFormData, 'advantages', 'id'>[];
  append: UseFieldArrayAppend<StepTwoFormData, 'advantages'>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<StepTwoFormData>;
  errors: FieldErrors<StepTwoFormData>;
}

export default function Advantages({ fields, append, remove, register, errors }: AdvantagesProps) {
  const handleAppend = () => {
    if (fields.length === 5) return;
    append(NEW_ADVANTAGE);
  };
  return (
    <div className={styles.checkboxGroupWrapper}>
      {errors.advantages?.message && (
        <span className={styles.errorText}>{errors.advantages?.message}</span>
      )}
      {fields.map((field, index) => {
        return (
          <div className={styles.inputWithIcon} key={field.id}>
            <TextInput
              id={`field-advantages-${index + 1}`}
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
        type='button'
        id="button-add"
        variant="outlined"
        onClick={handleAppend}
        style={{ padding: '16px', width: 44 }}
      >
        <AddIcon />
      </Button>
    </div>
  );
}
