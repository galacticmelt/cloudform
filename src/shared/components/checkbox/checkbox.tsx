import { useState, forwardRef, InputHTMLAttributes } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleCheckboxChange = () => {
    console.log(props);
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" {...props} ref={ref} onChange={handleCheckboxChange} />
      <span className={styles.label}>{label}</span>
      <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path className={styles.checkmarkPath} d="M6,12.3 10.3,16.6 18.3,8.5" />
      </svg>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
