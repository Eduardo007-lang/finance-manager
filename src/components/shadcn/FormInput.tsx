
import { Controller } from "react-hook-form";
import InputMask from 'react-input-mask';

interface FormInputProps {
  name: string;
  control: any;
  rules?: object;
  mask?: string;
  placeholder?: string;
}

export function FormInput({ name, control, rules, mask, placeholder}: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
            <InputMask
              {...field}
              mask={mask ? mask : ''}
              maskChar={null}
              placeholder={placeholder}
            />
            {fieldState.error && (
              <span className="text-red-500 text-sm">{fieldState.error.message}</span>
            )}
        </div>
      )}
    />
  );
}
