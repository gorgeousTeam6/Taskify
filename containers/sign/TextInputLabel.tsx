import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import styles from './PwdLabel.module.scss';

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
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...register(id)}
          type={type}
          id={id}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
