import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<T>;
}

export default function TextInputWithLabel<T extends FieldValues>({
  id,
  label,
  placeholder,
  error,
  register,
}: Props<T>) {
  let type = 'text';
  let autoComplete = 'off';

  if (id === 'email') {
    type = 'email';
    autoComplete = 'email';
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className='relative'>
        <input
          {...register(id)}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
