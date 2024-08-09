import React from 'react';
import styles from './index.module.scss';
import { IconCrown, IconSetting, IconAddBox } from '@/assets/icongroup';
import UserIcon from '@/components/UserIcon';
import instance from '@/services/axios';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useInviteModalStore } from '@/stores/modalStore';

const fetchDashboards = async (dashboardId: string) => {
  const response = await instance.get(`/dashboards/${dashboardId}`);
  return [response.data.invitations.slice(0, 5), response.data.totalCount];
};

export default function InviteList({
  dashboardId,
}: Omit<HeaderDashboardProps, 'userData'>) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['inviteList', dashboardId],
    queryFn: () => fetchDashboards(dashboardId),
  });

  if (!data) {
    return null;
  }

  return (
    <div className={`${styles['invite-list']} ${styles[`count${data[1]}`]}`}>
      <div className={`${styles['invited-member']}`}>
        {data[0].invitations.map((invitation: IInvitation, index: number) => {
          index < 4 ? (
            <p>{invitation.invitee.nickname[0]}</p>
          ) : (
            <p>{`+${data[1] - 4}`}</p>
          );
        })}
      </div>
    </div>
  );
}
