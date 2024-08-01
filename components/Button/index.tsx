import React from 'react';
import styles from './index.module.scss';
import ButtonChildren from './ButtonChildren';

export default function Button({
  buttonType,
  isOwner,
  children = '',
  ...rest
}: ButtonProps) {
  return (
    <button className={`${styles['common']} ${styles[buttonType]}`} {...rest}>
      <ButtonChildren
        buttonType={buttonType}
        isOwner={isOwner}
        children={children}
      />
    </button>
  );
}
