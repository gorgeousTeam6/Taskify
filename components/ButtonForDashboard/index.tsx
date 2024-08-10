import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconArrowForward } from '@/assets/icongroup';

export default function ButtonForDashboard({
  color,
  isOwner,
  children = '',
  ...rest
}: ButtonForDashboardProps) {
  const iconSize = 18;

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
                <IconCrown
                  style={{ width: '100%', height: '100%' }}
                  aria-label={`crown icon`}
                />
              </div>
            )}
          </div>
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <IconArrowForward
            style={{ width: '100%', height: '100%' }}
            aria-label={`arrow forward icon`}
          />
        </div>
      </div>
    </button>
  );
}
