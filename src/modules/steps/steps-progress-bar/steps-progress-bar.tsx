import React, { useState } from 'react';
import styles from './steps-progress-bar.module.scss';

interface StepsProgressBarProps {
  stepsCount: number;
  stepIndex: number;
}

export default function StepsProgressBar({ stepsCount, stepIndex }: StepsProgressBarProps) {
  const [step, setStep] = useState(1);

  const array = [];
  for (let i = 1; i <= stepsCount; i++) {
    array.push(i);
  }

  return (
    <div className={styles.stepsProgressBar}>
      {array.map((_, index) => {
        return (
          <div className={styles.step} key={index}>
            <div className={styles.dot} />
          </div>
        );
      })}
    </div>
  );
}
