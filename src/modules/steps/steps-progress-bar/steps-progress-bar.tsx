import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import styles from './steps-progress-bar.module.scss';

interface StepsProgressBarProps {
  stepsCount: number;
  stepIndex: number;
}

const StepsProgressBar = ({ stepIndex, stepsCount }: StepsProgressBarProps) => {
  const stepsMapper = new Array(stepsCount).fill(null);

  const positionStyle = (index: number) => {
    let position;
    if (index === stepsMapper[0]) {
      position = styles.first;
    } else if (index === stepsMapper[stepsMapper.length - 1]) {
      position = styles.last;
    } else position = styles.transit;
    return position;
  };
  const statusStyle = (index: number, accomplished: boolean) => {
    const progress = index === stepIndex ? styles.inProgress : '';
    const completed = accomplished ? styles.completed : '';
    return [progress, completed].join(' ');
  };

  return (
    <ProgressBar
      percent={(stepIndex * 100) / (stepsMapper.length - 1)}
      stepPositions={[0.1, 50.1, 100.1]}
      filledBackground="#5558FA"
      height={8}
    >
      {stepsMapper.map((_, i) => (
        <Step transition="scale" key={i}>
          {({ accomplished, index }) => (
            <div className={`${styles.step} ${positionStyle(index)}`}>
              <div className={`${styles.stepMark} ${statusStyle(index, accomplished)}`} />
              <span className={`${statusStyle(index, accomplished)}`}>{index + 1}</span>
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default StepsProgressBar;
