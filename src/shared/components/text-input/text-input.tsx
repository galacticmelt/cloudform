import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './text-input.module.scss';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tip?: string;
  errorText?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, tip, errorText, ...props }, ref) => {
    const validityStyle = errorText ? styles.invalid : '';

    return (
      <div className={styles.textInputWrapper}>
        {label && <span className={styles.textInputLabel}>{label}</span>}
        <input className={[styles.textInputField, validityStyle].join(' ')} {...props} ref={ref} />
        {tip && !errorText && <span className={styles.textInputTip}>Tip</span>}
        {errorText && <span className={styles.errorText}>{errorText}</span>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
