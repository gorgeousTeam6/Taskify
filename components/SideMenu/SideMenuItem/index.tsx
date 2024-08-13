import React from 'react';
import styles from './index.module.scss';
import { IconCrown } from '@/assets/icongroup';
import { useTheme } from '@/hooks/useThemeContext';
import { useRouter } from 'next/router';

export default function SideMenuItem({
  dashboardId,
  color = 'green',
  isOwner = false,
  children,
}: SideMenuItemProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const { id } = router.query;

  const isSelectedItem = String(dashboardId) === String(id) ? 'selected' : '';

  return (
    <div
      data-id={dashboardId}
      className={`${styles['side-menu-item']} ${styles[theme]} ${styles[isSelectedItem]}`}
    >
      <div className={`${styles['side-menu-item-container']}`}>
        <div
          className={`${styles['item-circle']}`}
          style={{ background: color }}
        ></div>
        <div className={`${styles['item-name-wrapper']} ${styles[theme]}`}>
          <p>{children}</p>
          {isOwner && (
            <div className={`${styles['icon-wrapper']}`}>
              <IconCrown
                style={{ width: '100%', height: '100%' }}
                aria-label={`owner icon`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
