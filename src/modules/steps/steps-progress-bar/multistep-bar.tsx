import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import styles from './steps-progress-bar.module.scss';

interface StepProgressBarProps {
  stepIndex: number;
}

const StepProgressBar = ({ stepIndex }: StepProgressBarProps) => {
  return (
    <ProgressBar
      percent={(stepIndex * 100) / 2}
      stepPositions={[0.1, 50.1, 100.1]}
      filledBackground="#5558FA"
      height={8}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`${styles.step} ${styles.first}`}>
            <div
              className={`${styles.stepMark} ${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            />
            <span
              className={`${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            >
              1
            </span>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`${styles.step} ${styles.transit}`}>
            <div
              className={`${styles.stepMark} ${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            />
            <span
              className={`${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            >
              2
            </span>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`${styles.step} ${styles.last}`}>
            <div
              className={`${styles.stepMark} ${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            />
            <span
              className={`${index === stepIndex ? styles.inProgress : ''} ${
                accomplished ? styles.completed : ''
              }`}
            >
              3
            </span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
