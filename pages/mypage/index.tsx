import EditProfileForm from '@/containers/mypage/EditProfileForm';
import PwdChangeForm from '@/containers/mypage/PwdChangeForm';
import styles from './index.module.scss';
import HeaderDashboard from '@/components/Header/HeaderDashboard';
import SideMenu from '@/components/SideMenu';
import { Fragment } from 'react';

export default function Mypage() {
  return (
    <Fragment>
      <HeaderDashboard />
      <SideMenu />
      <div className={styles.text}>
        <section className={styles.profilebox}>
          <h2 className={styles.profile}>프로필</h2>
          <EditProfileForm />
        </section>
        <section className={styles.Pwdbox}>
          <h2 className={styles.Pwdchange}>비밀번호 변경</h2>
          <PwdChangeForm />
        </section>
      </div>
    </Fragment>
  );
}
