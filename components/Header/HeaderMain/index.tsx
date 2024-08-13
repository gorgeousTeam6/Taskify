import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import LogoMobile from '@/assets/logos/LogoImage.svg';
import { useTheme } from '@/hooks/useThemeContext';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function HeaderMain() {
  const { theme } = useTheme();
  return (
    <header className={`${styles['header-container']} ${styles[theme]}`}>
      <Link href='/'>
        <div className={`${styles['logo-container']}`}>
          {theme === 'light' && (
            <Image src='/LogoBlack.png' alt='' width={1080} height={330} />
          )}
          {theme === 'dark' && (
            <Image src='/LogoLightGray.png' alt='' width={1080} height={330} />
          )}
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
        <ThemeSwitch />
      </div>
    </header>
  );
}
