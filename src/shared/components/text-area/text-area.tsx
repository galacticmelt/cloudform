import { forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './text-area.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  tip?: string;
  errorText?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, tip, errorText, ...props }, ref) => {
    const validityStyle = errorText ? styles.invalid : '';

    return (
      <div className={styles.textAreaWrapper}>
        {label && <span className={styles.textAreaLabel}>{label}</span>}
        <textarea
          className={[styles.textAreaField, validityStyle].join(' ')}
          {...props}
          ref={ref}
        />
        {tip && !errorText && <span className={styles.textAreaTip}>Tip</span>}
        {errorText && <span className={styles.errorText}>{errorText}</span>}
      </div>
    );
  }
);

TextArea.displayName = 'TextAreaArea ';

export default TextArea;
