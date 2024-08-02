import Image from 'next/image';
import { useState } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  id: Path<T>;
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<T>;
}

export default function PwdInputWithLabel<T extends FieldValues>({
  id,
  label,
  placeholder,
  error,
  register,
}: Props<T>) {
  const [visible, setVisible] = useState(false);
  const type = visible ? 'text' : 'password';

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className='relative'>
        <input
          {...register(id)}
          className={`input2`}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete='new-password'
        />
        <button type='button' onClick={() => setVisible(!visible)}>
          <Image
            src={
              visible
                ? 'assets/icons/ic_visible.svg'
                : 'assets/icons/ic_visible.svg'
            }
            alt='비밀번호 보이기 아이콘'
            width={20}
            height={20}
          />
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
