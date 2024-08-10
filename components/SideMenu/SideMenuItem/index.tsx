import React from 'react';
import styles from './index.module.scss';
import { IconCrown } from '@/assets/icongroup';

export default function SideMenuItem({
  dashboardId,
  color = 'green',
  isOwner = false,
  children,
}: SideMenuItemProps) {
  return (
    <div data-id={dashboardId} className={`${styles['side-menu-item']}`}>
      <div className={`${styles['side-menu-item-container']}`}>
        <div
          className={`${styles['item-circle']}`}
          style={{ background: color }}
        ></div>
        <div className={`${styles['item-name-wrapper']}`}>
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

//green purple blue yellow pink
