import { IconArrowForward } from '@/assets/icongroup';
import { useTheme } from '@/hooks/useThemeContext';
import React from 'react';
import styles from './index.module.scss';

export default function ButtonSetForPagination({
  size,
  onClickToPrev,
  onClickToNext,
  ...rest
}: ButtonSetForPaginationProps) {
  const { theme } = useTheme();
  return (
    <div className={`${styles['button-set']} ${styles[size]}`}>
      <button
        className={`${styles['button-pagination']} ${styles['left']} ${styles[theme]}`}
        onClick={onClickToPrev}
        {...rest}
      >
        <IconArrowForward />
      </button>
      <button
        className={`${styles['button-pagination']} ${styles['right']} ${styles[theme]}`}
        onClick={onClickToNext}
        {...rest}
      >
        <IconArrowForward />
      </button>
    </div>
  );
}
