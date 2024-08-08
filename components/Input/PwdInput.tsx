import { useState } from 'react';
import { IconVisible, IconInvisible } from '@/assets/icongroup';
import styles from './PwdInput.module.scss';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  error?: string;
}

export default function PwdInput(props: InputProps) {
  const { id, placeholder, error, className = '', ...inputProps } = props;
  const [visible, setVisible] = useState(false);
  const type = visible ? 'text' : 'password';

  return (
    <div className={styles[`box`]}>
      <div className={styles[`input-Wrapper`]}>
        <input
          className={`${styles[`input`]} ${error ? styles[`border-Red`] : ''}`}
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete='new-password'
          {...inputProps}
        />
        <button
          type='button'
          className={styles[`button`]}
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <IconVisible className={styles[`icon`]} />
          ) : (
            <IconInvisible className={styles[`icon`]} />
          )}
        </button>
      </div>
      {error && <p className={styles[`error`]}>{error}</p>}
    </div>
  );
}
