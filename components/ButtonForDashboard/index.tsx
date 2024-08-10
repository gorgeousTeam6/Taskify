import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconArrowForward } from '@/assets/icongroup';

export default function ButtonForDashboard({
  color,
  isOwner,
  children = '',
  ...rest
}: ButtonForDashboardProps) {
  return (
    <button
      className={`${styles['common']} ${styles['dashboard-button']}`}
      {...rest}
    >
      <div className={`${styles['standard-flex']} ${styles['dashboard']}`}>
        <div
          className={`${styles['standard-flex']} ${styles['dashboard-title-box']}`}
        >
          <div
            className={`${styles['circle']}`}
            style={{ backgroundColor: color }}
          />
          <div
            className={`${styles['standard-flex']} ${styles['dashboard-title-icon-gap']}`}
          >
            {children}
            {isOwner && (
              <div className={`${styles['crown-size']}`}>
                <IconCrown aria-label={`crown icon`} />
              </div>
            )}
          </div>
        </div>
        <IconArrowForward aria-label={`arrow forward icon`} />
      </div>
    </button>
  );
}
