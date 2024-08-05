import React from 'react';
import styles from './index.module.scss';
import { IconAddChip, IconCrown, IconArrowForward } from '@/assets/icongroup';

const iconSource: Record<
  ButtonType,
  React.FC<React.SVGProps<SVGSVGElement>> | null
> = {
  login: null,
  primary: null,
  secondary: null,
  delete: null,
  'add-column': IconAddChip,
  'add-todo': IconAddChip,
  'delete-dashboard': null,
  pagenation: null,
  'add-board': IconAddChip,
  dashboard: IconArrowForward,
};

export default function ButtonChildren({
  buttonType,
  isOwner = false,
  children,
}: ButtonProps) {
  const ActionIcon = iconSource[buttonType];

  // 보여줄 버튼이 없는 경우
  if (!ActionIcon) {
    return <span>{children}</span>;
  }

  // 버튼 타입이 add~인 경우
  if (ActionIcon === IconAddChip) {
    return (
      <ButtonChildrenAdd buttonType={buttonType} ActionIcon={ActionIcon}>
        {children}
      </ButtonChildrenAdd>
    );
  }

  // 버튼 타입이 dashboard인 경우
  if (ActionIcon === IconArrowForward) {
    return (
      <ButtonChildrenLink
        buttonType={buttonType}
        isOwner={isOwner}
        ActionIcon={ActionIcon}
      >
        {children}
      </ButtonChildrenLink>
    );
  }

  return null;
}

function ButtonChildrenAdd({
  buttonType,
  children,
  ActionIcon,
}: ButtonChildrenProps) {
  const iconSize = 22;
  return (
    <div className={`${styles['standard-flex']} ${styles[buttonType]}`}>
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

function ButtonChildrenLink({
  buttonType,
  isOwner,
  children,
  ActionIcon,
}: ButtonChildrenProps) {
  const iconSize = 18;
  const CrownIcon = IconCrown;

  return (
    <div className={`${styles['standard-flex']} ${styles[buttonType]}`}>
      <div
        className={`${styles['standard-flex']} ${styles['dashboard-title-box']}`}
      >
        <div className={`${styles['circle']}`} />
        <div
          className={`${styles['standard-flex']} ${styles['dashboard-title-icon-gap']}`}
        >
          {children}
          {isOwner && (
            <div className={`${styles['crown-size']}`}>
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
