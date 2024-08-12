import React from 'react';
import styles from './index.module.scss';
import ButtonChildren from './ButtonChildren';
import { useTheme } from '@/hooks/useThemeContext';

export default function Button({
  buttonType,
  isOwner,
  children = '',
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  return (
    <button
      className={`${styles['common']} ${styles[buttonType]} ${styles[theme]}`}
      {...rest}
    >
      <ButtonChildren
        buttonType={buttonType}
        isOwner={isOwner}
        children={children}
      />
    </button>
  );
}
