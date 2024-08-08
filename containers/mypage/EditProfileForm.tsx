import { useRouter } from 'next/router';
import { ChangeEvent, FormEventHandler, useState, useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';
import ImageInput from '@/components/Input/ImageInput';
import { useUpdateProfile } from '@/hooks/useUpdateProfile';
import { postImage } from '@/services/postService';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import styles from './EditProfileForm.module.scss';
import { UpdateProfileForm } from '@/types/UpdateProfileForm.interface';

export default function EditProfileForm() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { mutate, isPending, isError, error } = useUpdateProfile();
  const { user, loading } = useUserStore((state) => ({
    user: state.user,
    loading: state.loading,
  }));
  const [nickname, setNickname] = useState(user?.nickname ?? '');
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [isNicknameValid, setIsNicknameValid] = useState({
    gtZero: true,
    lteTen: true,
  });

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 설정
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !loading && !user) {
      router.replace('/signin');
    }
  }, [user, loading, router, isClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    setIsNicknameValid({
      gtZero: newNickname.length > 0,
      lteTen: newNickname.length <= 10,
    });
  };

  const handleImageChange = (image: File) => {
    setProfileImageFile(image);
  };

  const handleImageDelete = () => {
    setProfileImageFile(null);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formProfileData = async () => {
      const formData: UpdateProfileForm = {};

      if (nickname !== user?.nickname) {
        formData['nickname'] = nickname;
      }

      if (!profileImageFile && user?.profileImageUrl) {
        formData['profileImageUrl'] = null;
      }

      if (profileImageFile) {
        const { profileImageUrl } = await postImage({
          image: profileImageFile,
        });
        formData['profileImageUrl'] = profileImageUrl;
      }

      return formData;
    };

    const postData = async () => {
      const formData = await formProfileData();

      if (Object.keys(formData).length !== 0) {
        mutate(formData);
      }
    };

    postData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles[`Image-Box`]}>
        <div className={styles[`size`]}>
          <ImageInput
            name='user-profile'
            value={user?.profileImageUrl || null}
            onChange={handleImageChange}
            onDeleteClick={handleImageDelete}
          />
        </div>

        <div className={styles[`email-Box`]}>
          <div className={styles[`email-Size`]}>
            <label className='label'>이메일</label>
            <p className={styles[`input`]}>{user?.email}</p>
          </div>

          <div className={styles[`nickname`]}>
            <label htmlFor='nickname' className='label'>
              닉네임
            </label>
            <input
              className={`${styles[`input`]} ${
                !(isNicknameValid.gtZero && isNicknameValid.lteTen)
                  ? styles.invalid
                  : ''
              }`}
              id='nickname'
              value={nickname}
              placeholder='닉네임을 입력해주세요'
              type='text'
              onChange={handleNicknameChange}
            />
            {!isNicknameValid.gtZero && (
              <p className={styles[`nickname-Text`]}>닉네임을 입력해주세요</p>
            )}
            {!isNicknameValid.lteTen && (
              <p className={styles[`nickname-Text`]}>
                닉네임을 10자 이내로 입력해주세요
              </p>
            )}
          </div>
          <div className={styles[`button`]}>
            <Button
              buttonType='login'
              disabled={
                isPending || !(isNicknameValid.gtZero && isNicknameValid.lteTen)
              }
            >
              {isPending ? '저장중..' : '저장'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
