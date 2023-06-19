import Checkbox from '../../../shared/components/checkbox/checkbox';
import { forwardRef, InputHTMLAttributes } from 'react';
import { Option } from '../../../shared/common/types';

interface CheckboxGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
}

const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ options, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {options.map(({ label, value }, index) => {
          return (
            <Checkbox
              id={`field-checkbox-group-option-${index + 1}`}
              key={value}
              label={label}
              value={value}
              {...props}
              ref={ref}
            />
          );
        })}
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
