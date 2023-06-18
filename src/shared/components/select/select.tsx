import { forwardRef, SelectHTMLAttributes } from 'react';
import styles from './select.module.scss';
import { ArrowDownIcon } from '../../../assets/vector-images';

type Option = {
  name: string;
  value: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  tip?: string;
  errorText?: string;
  options: Option[];
  placeholderOption: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, errorText, options, placeholderOption, ...props }, ref) => {
    const validityStyle = errorText ? styles.invalid : '';

    return (
      <div className={styles.selectWrapper}>
        {label && <span className={styles.selectLabel}>{label}</span>}
        <div className={styles.selectFieldWrapper}>
          <select className={[styles.selectField, validityStyle].join(' ')} {...props} ref={ref}>
            <option selected disabled hidden value="" className={styles.placeholderOption}>
              {placeholderOption}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {errorText && <span className={styles.errorText}>{errorText}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
