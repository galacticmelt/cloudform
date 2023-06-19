import { useEffect, useState } from 'react';
import StepsProgressBar from './steps-progress-bar/steps-progress-bar';
import StepOneForm from './step-one-form/step-one-form';
import { useSteps } from '../../shared/common/hooks';
import { useNavigate } from 'react-router-dom';
import StepTwoForm from './step-two-form/step-two-form';
import StepThreeForm from './step-three-form/step-three-form';
import Modal from '../modal/modal';
import { SuccessIconDecorated } from '../../assets/vector-images';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { combinedFormActions } from '../../store/features/combinedForm/combinedForm.slice';
import { combinedFormSelector } from '../../store/features/combinedForm/combinedForm.selectors';
import styles from './steps.module.scss';

export default function Steps() {
  const StepOne = () => <StepOneForm nextHandler={next} backHandler={() => navigate('/')} />;
  const StepTwo = () => <StepTwoForm submitHandler={next} backHandler={back} />;
  const StepThree = () => <StepThreeForm submitHandler={submitAllData} backHandler={back} />;

  const { submitSuccess, submitError } = useAppSelector((state) => state.combinedForm);

  const combinedFormData = useAppSelector(combinedFormSelector);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
    navigate('/');
    dispatch(combinedFormActions.setCombinedFormData({ submitSuccess: false }));
  };

  const submitAllData = () => {
    console.log(combinedFormData);
    dispatch(combinedFormActions.submitForm(combinedFormData));
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { steps, currentStepIndex, next, back } = useSteps([
    <StepOne />,
    <StepTwo />,
    <StepThree />
  ]);

  useEffect(() => {
    if (submitError.status) {
      throw submitError;
    }
  }, [submitError.status]);

  return (
    <div className={styles.steps}>
      <div className={styles.stepsContent}>
        <div className={styles.progressBarWrapper}>
          <StepsProgressBar stepIndex={currentStepIndex} stepsCount={steps.length} />
        </div>
        {steps[currentStepIndex]}
        <Modal
          isOpened={submitSuccess ? true : false}
          title={'Форма успешно отправлена'}
          content={<SuccessIconDecorated />}
          handleClose={handleModalClose}
        />
      </div>
    </div>
  );
}
