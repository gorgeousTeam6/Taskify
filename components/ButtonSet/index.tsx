import React, { ReactElement } from 'react';
import styles from './index.module.scss';
import Button from '../Button';

type ButtonSetType = 'primary' | 'pagenation';

interface ButtonSetProps {
  buttonSetType: ButtonSetType;
  orderReverse?: boolean;
  children: ReactElement<typeof Button> | ReactElement<typeof Button>[];
}

const ButtonSet: React.FC<ButtonSetProps> = ({
  buttonSetType,
  orderReverse = false,
  children,
}) => {
  if (buttonSetType === 'primary') {
    const reverse = orderReverse ? 'reverse' : '';

    return (
      <div
        className={`${styles['button-set']} ${styles[buttonSetType]} ${styles[reverse]}`}
      >
        {children}
      </div>
    );
  }
};

export default ButtonSet;
