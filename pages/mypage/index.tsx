import EditProfileForm from '@/containers/mypage/EditProfileForm';
import PwdChangeForm from '@/containers/mypage/PwdChangeForm';
import styles from './index.module.scss';

export default function Mypage() {
  return (
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
  );
}
