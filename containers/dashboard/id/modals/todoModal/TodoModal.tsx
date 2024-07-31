import styles from './TodoModal.module.scss';
import { IconKebab, IconClose } from '@/assets/icongroup';
import Image from 'next/image';
import sampleImg from '@/assets/images/Group 751.png';
import profileImg from '@/assets/images/img_profileImg.png';

export default function TodoModal() {
  return (
    <>
      <div className={styles['modal-container']}>
        <div className={styles['modal-wrapper']}>
          <div className={styles['title-and-icons']}>
            <p>새로운 일정 관리 Taskify</p>
            <div className={styles['kebab-and-close']}>
              <button className={styles['top-button']}>
                <IconKebab />
              </button>
              <button className={styles['top-button']}>
                <IconClose />
              </button>
            </div>
          </div>
          <div className={styles['contents']}>
            <div> chips </div>
            <p className={styles['contents-text']}>
              오월 하늘엔 휘파람이 분대요 눈여겨둔 볕에 누우면 팔베개도 스르르르
              그 애의 몸짓은 계절을 묘사해요 자꾸만 나풀나풀대는데 단번에 봄인
              걸 알았어요 이런 내 마음은 부르지도 못할 노래만 잔뜩 담았네 마땅한
              할 일도 갈 곳도 모른 채로 꼭 그렇게 서 있었네 When I see her
              smile, oh, distant light
            </p>
            <Image src={sampleImg} alt='일정 사진' />
            <div className={styles['comment-input-container']}>
              <p>댓글</p>
              <textarea
                className={styles['comment-input']}
                placeholder='댓글 작성하기'
              />
            </div>
            <div className={styles['comment-card']}>
              <Image
                className={styles['profile-img']}
                src={profileImg}
                alt='프로필이미지'
              />
              <div className={styles['comment-contents']}>
                <div className={styles['writer-and-date']}>
                  <p className={styles['writer']}>장아영</p>
                  <p className={styles['date']}>2022.12.27 (date)</p>
                </div>
                <p className={styles['comment-text']}>
                  오늘 안에 이거 끝낼 수 있나요?{' '}
                </p>
                <div className={styles['edit-and-delete']}>
                  <button className={styles['button']}>수정</button>
                  <button className={styles['button']}>삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
