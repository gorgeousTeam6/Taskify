import { IconArrowForward } from '@/assets/icongroup';
import React from 'react';
import styles from './index.module.scss';

export default function ButtonSetForPagination({
  size,
  onClickToPrev,
  onClickToNext,
  ...rest
}: ButtonSetForPaginationProps) {
  return (
    <div className={`${styles['button-set']} ${styles[size]}`}>
      <button
        className={`${styles['button-pagination']} ${styles['left']}`}
        onClick={onClickToPrev}
        {...rest}
      >
        <IconArrowForward />
      </button>
      <button
        className={`${styles['button-pagination']} ${styles['right']}`}
        onClick={onClickToNext}
        {...rest}
      >
        <IconArrowForward />
      </button>
    </div>
  );
}
