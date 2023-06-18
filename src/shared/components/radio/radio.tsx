import { useState, forwardRef, InputHTMLAttributes } from 'react';
import styles from './radio.module.scss';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, ...props }, ref) => {
  return (
    <label className={styles.customRadio}>
      <input type="radio" {...props} ref={ref} />
      <span className={styles.label}>{label}</span>
      <svg className={styles.dotPlacement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle className={styles.dot} cx="12" cy="12" r="4" />
      </svg>
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
