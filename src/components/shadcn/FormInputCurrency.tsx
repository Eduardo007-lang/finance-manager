import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  name: string;
  control: any;
  rules?: object;
  placeholder?: string;
}
export const formatCurrency = (value: string) => {
    value = value.replace(/\D/g, '')
    if (value) {
        const numberValue = parseFloat(value) / 100
        const formattedValue = numberValue.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })

        return formattedValue
    }

    return value
}

export function FormInputCurrency({
  name,
  control,
  rules
}: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Input
            value={field.value}
            placeholder="R$ 0,00"
            onChange={(e) => field.onChange(formatCurrency(e.target.value))}
          />
          {fieldState.error && (
            <span className="text-red-500 text-sm">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
