import React from 'react';
import styles from './index.module.scss';

export default function UserIcon({ src }: UserIconProps) {
  return (
    <div className={`${styles['user-icon']}`}>
      <img src={src} alt='유저 아이콘' />
    </div>
  );
}
