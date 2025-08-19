// FormSelect.tsx
import { Controller } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormSelectProps {
  name: string;
  control: any;
  rules?: object;
  placeholder?: string;
  options: { label: string; value: string }[];
}

export function FormSelect({ name, control, rules, placeholder, options }: FormSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="w-full">
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2">
              <SelectValue placeholder={placeholder || "Selecione uma opção"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {fieldState.error && (
            <span className="text-red-500 text-sm">{fieldState.error.message}</span>
          )}
        </div>
      )}
    />
  );
}
