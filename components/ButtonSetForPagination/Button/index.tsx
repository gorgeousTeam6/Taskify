import { IconArrowForward } from '@/assets/icongroup';
import React from 'react';
import styles from './index.module.scss';

export default function ButtonSetForPagination({
  size,
  ...rest
}: ButtonSetForPaginationProps) {
  return (
    <div className={`${styles['button-set']} ${styles[size]}`}>
      <button
        className={`${styles['button-pagination']} ${styles['left']}`}
        {...rest}
      >
        <IconArrowForward />
      </button>
      <button
        className={`${styles['button-pagination']} ${styles['right']}`}
        {...rest}
      >
        <IconArrowForward />
      </button>
    </div>
  );
}
