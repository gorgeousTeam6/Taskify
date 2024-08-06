import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logoIcon from '@/assets/images/img_logo_icon.png';
import logoText from '@/assets/images/img_logo_text.png';
import { IconAddBox } from '@/assets/icongroup';
import SideMenuItem from './SideMenuItem';

const mockItems: SideMenuItemProps[] = [
  {
    children: '비브리지',
    color: 'green',
    isOwner: true,
  },
  {
    children: '코드잇',
    color: 'purple',
    isOwner: true,
  },
  {
    children: '3분기 계획',
    color: 'orange',
    isOwner: false,
  },
  {
    children: '회의록',
    color: 'blue',
    isOwner: false,
  },
  {
    children: '중요 문서함',
    color: 'pink',
    isOwner: false,
  },
];

export default function SideMenu({}) {
  return (
    <section className={`${styles['side-menu']}`}>
      <div className={`${styles['side-menu-container']}`}>
        <div className={`${styles['logo-container']}`}>
          <div className={`${styles['logo-icon-wrapper']}`}>
            <Image
              src={logoIcon}
              alt=''
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
          <div className={`${styles['logo-text-wrapper']}`}>
            <Image
              src={logoText}
              alt=''
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        </div>
        <div className={`${styles['dashboard-container']}`}>
          <div className={`${styles['dashboard-header']}`}>
            <p className={`${styles['dashboard-header-text']}`}>Dash Boards</p>
            <IconAddBox
              className={`${styles['dashboard-header-icon']}`}
            ></IconAddBox>
          </div>
          <div className={`${styles['dashboard-list']}`}>
            {mockItems.map((item) => (
              <SideMenuItem color={item.color} isOwner={item.isOwner}>
                {item.children}
              </SideMenuItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
