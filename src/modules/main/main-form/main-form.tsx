import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MainFormData } from '../../../shared/common/types';
import { withHookFormMask } from 'use-mask-input';
import { combinedFormActions } from '../../../store/features/combinedForm/combinedForm.slice';
import { mainFormSchema } from '../../../shared/common/validation';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import styles from './main-form.module.scss';

export default function MainForm() {
  const { phone, email } = useAppSelector((state) => state.combinedForm);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<MainFormData>({
    defaultValues: { phone, email },
    resolver: yupResolver(mainFormSchema),
    reValidateMode: 'onChange'
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<MainFormData> = async ({ email, phone }) => {
    console.log(phone.length);
    dispatch(combinedFormActions.setCombinedFormData({ email, phone }));
    navigate('/create');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.mainForm}>
      <TextInput
        {...withHookFormMask(register('phone'), ['+7 999 999-99-99'])}
        autoFocus
        label="Phone"
        placeholder="+7 999 999-99-99"
        errorText={errors.phone?.message}
      />
      <TextInput
        {...register('email')}
        label="Email"
        placeholder="tim.jennings@example.com"
        errorText={errors.email?.message}
      />
      <Button id="button-start" type="submit">
        Начать
      </Button>
    </form>
  );
}
