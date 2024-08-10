import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import HeaderDashboard from '../Header/HeaderDashboard';
import SideMenu from '../SideMenu';
import instance from '@/services/axios';
import { useQuery } from '@tanstack/react-query';

const fetchMyInfo = async () => {
  const response = await instance.get(`/users/me`);
  return response.data;
};

export default function FixedMenu({ mode = '' }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['myInfo'],
    queryFn: () => fetchMyInfo(),
  });

  const [selectedDashboardId, setSelectedDashboardId] = useState<string>('');

  const handleSideMenuItemClick = (id: string) => {
    setSelectedDashboardId(id);
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <HeaderDashboard
        userData={data}
        dashboardId={selectedDashboardId}
      ></HeaderDashboard>
      <SideMenu onItemClick={handleSideMenuItemClick}></SideMenu>
    </div>
  );
}
