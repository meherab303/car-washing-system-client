import { Input } from "@heroui/react";

export const UpdateFormField = ({
  label,
  name,
  register,
  errors,
  disabled = false,
}: any) => (
  <div>
    <label htmlFor={name} className="text-sm font-medium">
      {label}
    </label>
    <Input {...register(name)} className="w-full" disabled={disabled} />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name]?.message}</p>
    )}
  </div>
);
