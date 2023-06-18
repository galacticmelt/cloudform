import { forwardRef, ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, ...props }, ref) => {
    return (
      <button
        className={!variant || variant === 'filled' ? styles.filled : styles.outlined}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
