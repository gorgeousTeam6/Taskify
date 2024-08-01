import React from 'react';
import styles from './index.module.scss';

export default function ButtonSet({
  buttonSetType,
  orderReverse = false,
  children,
}: ButtonSetProps) {
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
}
