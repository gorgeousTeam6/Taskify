import React from 'react';
import styles from './index.module.scss';
import ButtonChildren from './ButtonChildren';

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
  disable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
}

const Button: React.FC<ButtonProps> = ({
  deviceType,
  buttonType,
  isOwner,
  disable = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles['common']} ${styles[buttonType]} ${styles[deviceType]}`}
      onClick={onClick}
      disabled={disable}
    >
      <ButtonChildren
        deviceType={deviceType}
        buttonType={buttonType}
        isOwner={isOwner}
        children={children}
      />
    </button>
  );
};

export default Button;
