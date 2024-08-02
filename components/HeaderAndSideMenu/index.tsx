import React from 'react';
import styles from './index.module.scss';
import HeaderDashboard from '../Header/HeaderDashboard';
import SideMenu from '../SideMenu';

export default function HeaderAndSideMenu() {
  return (
    <section className={`${styles['header-side-menu']}`}>
      <SideMenu></SideMenu>
      <HeaderDashboard></HeaderDashboard>
    </section>
  );
}
