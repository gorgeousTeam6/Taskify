import React from 'react';
import styles from './index.module.scss';

export default function ButtonSet({
  buttonSetType,
  orderReverse = false,
  widthFill = false,
  children,
}: ButtonSetProps) {
  if (buttonSetType === 'primary') {
    const reverse = orderReverse ? 'reverse' : '';
    const fill = widthFill ? 'fill' : '';

    return (
      <div
        className={`${styles['button-set']} ${styles[buttonSetType]} ${styles[reverse]} ${styles[fill]}`}
      >
        {children}
      </div>
    );
  }

  return null;
}
