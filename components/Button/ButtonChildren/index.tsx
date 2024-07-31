import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { IconAddBox, IconCrown, IconArrowForward } from '@/assets/icongroup';

type DeviceType = 'desktop' | 'tablet' | 'mobile';
type ButtonType =
  | 'login'
  | 'primary'
  | 'secondary'
  | 'delete'
  | 'add-column'
  | 'add-todo'
  | 'delete-dashboard'
  | 'pagenation'
  | 'add-board'
  | 'dashboard';

interface ButtonProps {
  deviceType: DeviceType;
  buttonType: ButtonType;
  isOwner?: boolean;
  children: string;
}

const iconSource: Record<
  ButtonType,
  React.FC<React.SVGProps<SVGSVGElement>> | null
> = {
  login: null,
  primary: null,
  secondary: null,
  delete: null,
  'add-column': IconAddBox,
  'add-todo': IconAddBox,
  'delete-dashboard': null,
  pagenation: null,
  'add-board': IconAddBox,
  dashboard: IconArrowForward,
};

const ButtonChildren: React.FC<ButtonProps> = ({
  deviceType,
  buttonType,
  isOwner = false,
  children,
}) => {
  const ActionIcon = iconSource[buttonType];
  const CrownIcon = IconCrown;
  const iconSize = 20;

  if (!ActionIcon) {
    return children;
  }

  if (ActionIcon === IconAddBox) {
    return (
      <div
        className={`${styles['standard-flex']} ${styles[buttonType]} ${styles[deviceType]}`}
      >
        {children}
        <div style={{ width: iconSize, height: iconSize }}>
          <ActionIcon
            style={{ width: '100%', height: '100%' }}
            aria-label={`${buttonType} icon`}
          />
        </div>
      </div>
    );
  }

  if (ActionIcon === IconArrowForward) {
    return (
      <div
        className={`${styles['standard-flex']} ${styles[buttonType]} ${styles[deviceType]}`}
      >
        <div
          className={`${styles['standard-flex']} ${styles['dashboard-title-box']} ${styles[deviceType]}`}
        >
          <div className={`${styles['circle']}`} />
          <div
            className={`${styles['standard-flex']} ${styles['dashboard-title-icon-gap']} ${styles[deviceType]}`}
          >
            {children}
            {isOwner && (
              <div style={{ width: iconSize, height: iconSize }}>
                <CrownIcon
                  style={{ width: '100%', height: '100%' }}
                  aria-label={`${buttonType} icon`}
                />
              </div>
            )}
          </div>
        </div>
        <div style={{ width: iconSize, height: iconSize }}>
          <ActionIcon
            style={{ width: '100%', height: '100%' }}
            aria-label={`${buttonType} icon`}
          />
        </div>
      </div>
    );
  }
};

export default ButtonChildren;
