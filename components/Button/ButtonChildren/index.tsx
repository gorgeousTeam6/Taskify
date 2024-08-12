import React from 'react';
import styles from './index.module.scss';
import { IconAddChip, IconArrowForward } from '@/assets/icongroup';
import ChipAdd from '@/containers/dashboard/id/chips/ChipAdd';
import { useTheme } from '@/hooks/useThemeContext';

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
  'modal-primary': null,
  'modal-secondary': null,
};

export default function ButtonChildren({
  buttonType,
  isOwner = false,
  children,
}: ButtonProps) {
  const { theme } = useTheme();
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

  return null;
}

function ButtonChildrenAdd({
  buttonType,
  children,
  ActionIcon,
}: ButtonChildrenProps) {
  const { theme } = useTheme();
  const iconSize = 22;
  return (
    <div
      className={`${styles['standard-flex']} ${styles[buttonType]} ${styles[theme]}`}
    >
      {children}
      <div style={{ width: iconSize, height: iconSize }}>
        <ChipAdd />
      </div>
    </div>
  );
}
