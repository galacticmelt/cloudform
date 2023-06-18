import { ReactElement, useState } from 'react';

export const useSteps = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((index) => {
      if (index === steps.length - 1) return index;
      return index + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((index) => {
      if (index === 0) return index;
      return index - 1;
    });
  };

  return { steps, currentStepIndex, next, back };
};
