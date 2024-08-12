import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconArrowForward } from '@/assets/icongroup';
import { useTheme } from '@/hooks/useThemeContext';

export default function ButtonForDashboard({
  color,
  isOwner,
  children = '',
  ...rest
}: ButtonForDashboardProps) {
  const { theme } = useTheme();
  return (
    <button
      className={`${styles['common']} ${styles['dashboard-button']} ${styles[theme]}`}
      {...rest}
    >
      <div
        className={`${styles['standard-flex']} ${styles['dashboard']} ${styles[theme]}`}
      >
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
            <p>{children}</p>
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
