import Image from 'next/image';
import { User } from '@/types/User.interface';
import styles from './ProfileIcon.module.scss';

interface ProfileIconProps {
  user: User;
  imgClassName: string;
  fontClassName: string;
}

export function ProfileIcon({
  user,
  imgClassName,
  fontClassName,
}: ProfileIconProps) {
  return (
    <div className={styles.profileImg}>
      {user.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          alt='프로필'
          fill
          className={styles.image}
        />
      ) : (
        <p className={styles.substring}>{user.nickname.substring(0, 1)}</p>
      )}
    </div>
  );
}
