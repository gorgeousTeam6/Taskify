import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logos/Logo.svg';
import LogoMobile from '@/assets/logos/LogoImage.svg';

export default function HeaderMain({ mode = '' }) {
  return (
    <header className={`${styles['header-container']} ${styles[mode]}`}>
      <Link href='/'>
        <div className={`${styles['logo-container']}`}>
          <Logo></Logo>
          <LogoMobile></LogoMobile>
        </div>
      </Link>
      <div className={`${styles['sign-container']}`}>
        <Link href='/signin'>
          <p>로그인</p>
        </Link>
        <Link href='/signup'>
          <p>회원가입</p>
        </Link>
      </div>
    </header>
  );
}
