import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconSetting, IconAddBox } from '@/assets/icongroup';
import UserIcon from '@/components/UserIcon';
import instance from '@/services/axios';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useInviteModalStore } from '@/stores/modalStore';
import InviteList from './InviteList';

const fetchDashboards = async (dashboardId: string) => {
  const response = await instance.get(`/dashboards/${dashboardId}`);
  return response.data;
};

export default function HeaderDashboard({
  userData,
  dashboardId,
}: HeaderDashboardProps) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['dashboardDetail', dashboardId],
    queryFn: () => fetchDashboards(dashboardId),
  });
  const router = useRouter();
  const { isModalOpen, setOpenModal } = useInviteModalStore();

  const userIcon =
    userData.profileImageUrl ||
    'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg';

  const handleManageClick = () => {
    router.push(`/dashboard/${dashboardId}/edit`);
  };

  if (!data) {
    return (
      <header className={`${styles['header-dashboard']}`}>
        <div
          className={`${styles['header-dashboard-container']} ${styles['flex-end-force']}`}
        >
          <div className={`${styles['dashboard-my']}`}>
            <UserIcon src={userIcon}></UserIcon>
            <p>{userData.nickname}</p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`${styles['header-dashboard']}`}>
      <div className={`${styles['header-dashboard-container']}`}>
        <div className={`${styles['dashboard-title-container']}`}>
          <p>{data.title}</p>
          {data.createdByMe && (
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
            {data.createdByMe && (
              <button
                className={`${styles['dashboard-manage-button']}`}
                onClick={handleManageClick}
              >
                <div>
                  <IconSetting
                    style={{ width: '20px', height: '20px' }}
                    aria-label={`setting icon`}
                  ></IconSetting>
                  관리
                </div>
              </button>
            )}
            <button
              className={`${styles['dashboard-manage-button']}`}
              onClick={setOpenModal}
            >
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
            <InviteList dashboardId={dashboardId}></InviteList>
            <div className={`${styles['dashboard-half-line']}`}></div>
            <div className={`${styles['dashboard-my']}`}>
              <UserIcon src={userIcon}></UserIcon>
              <p>{userData.nickname}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
