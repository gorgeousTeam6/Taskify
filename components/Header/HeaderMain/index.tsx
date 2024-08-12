import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logos/Logo.svg';
import LogoMobile from '@/assets/logos/LogoImage.svg';
import { useTheme } from '@/hooks/useThemeContext';

export default function HeaderMain() {
  const { theme } = useTheme();
  return (
    <header className={`${styles['header-container']} ${styles[theme]}`}>
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
