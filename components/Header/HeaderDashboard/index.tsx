import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconSetting, IconAddBox } from '@/assets/icongroup';
import UserIcon from '@/components/UserIcon';

export default function HeaderDashboard({ isOwner = true }) {
  return (
    <header className={`${styles['header-dashboard']}`}>
      <div className={`${styles['header-dashboard-container']}`}>
        <div className={`${styles['dashboard-title-container']}`}>
          <p>비브리지</p>
          {isOwner && (
            <div className={`${styles['crown-size']}`}>
              <IconCrown
                style={{ width: '20px', height: '16px' }}
                aria-label={`owner icon`}
              />
            </div>
          )}
        </div>
        <div className={`${styles['dashboard-info-container']}`}>
          <div className={`${styles['dashboard-manage-button-area']}`}>
            <button className={`${styles['dashboard-manage-button']}`}>
              <div>
                <IconSetting
                  style={{ width: '20px', height: '20px' }}
                  aria-label={`setting icon`}
                ></IconSetting>
                관리
              </div>
            </button>
            <button className={`${styles['dashboard-manage-button']}`}>
              <div>
                <IconAddBox
                  style={{ width: '20px', height: '20px' }}
                  aria-label={`add box icon`}
                ></IconAddBox>
                초대하기
              </div>
            </button>
          </div>
          <div className={`${styles['dashboard-member-area']}`}>
            <div className={`${styles['dashboard-members']}`}>
              <div
                className={`${styles['dashboard-member']} ${styles['member1']}`}
              >
                　Y
              </div>
              <div
                className={`${styles['dashboard-member']} ${styles['member2']}`}
              >
                　C
              </div>
              <div
                className={`${styles['dashboard-member']} ${styles['member3']}`}
              >
                　K
              </div>
              <div
                className={`${styles['dashboard-member']} ${styles['member4']}`}
              >
                　J
              </div>
              <div
                className={`${styles['dashboard-member']} ${styles['member5']}`}
              >
                +2
              </div>
            </div>
            <div className={`${styles['dashboard-half-line']}`}></div>
            <div className={`${styles['dashboard-my']}`}>
              <UserIcon src='https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg'></UserIcon>
              <p>배유철</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
