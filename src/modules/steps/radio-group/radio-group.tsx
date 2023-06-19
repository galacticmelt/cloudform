import Radio from '../../../shared/components/radio/radio';
import { Option } from '../../../shared/common/types';
import { forwardRef, InputHTMLAttributes } from 'react';

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(({ options, ...props }, ref) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {options.map(({ label, value }, index) => {
        return (
          <Radio
            id={`field-radio-group-option-${index + 1}`}
            key={value}
            value={value}
            label={label}
            ref={ref}
            {...props}
          />
        );
      })}
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
