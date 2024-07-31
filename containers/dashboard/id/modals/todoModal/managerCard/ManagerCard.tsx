import styles from './ManagerCard.module.scss';
import Image from 'next/image';
import profileImg from '@/assets/images/img_profileImg2.png';

export default function ManagerCard() {
  return (
    <div className={styles['container']}>
      <div className={styles['title-and-contents']}>
        <p className={styles['title']}>담당자</p>
        <div className={styles['manager']}>
          <Image
            className={styles['profileImg']}
            src={profileImg}
            alt='프로필 이미지'
          />
          <p className={styles['contents']}>손예진</p>
        </div>
      </div>
      <div className={styles['title-and-contents']}>
        <p className={styles['title']}>마감일</p>
        <p className={styles['contents']}>2024.08.02 19:00</p>
      </div>
    </div>
  );
}
