import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { IconAddBox } from '@/assets/icongroup';
import SideMenuItem from './SideMenuItem';
import instance from '@/services/axios';
import { useQuery } from '@tanstack/react-query';
import { useCreateModalStore } from '@/stores/modalStore';
import Logo from '@/assets/logos/Logo.svg';
import LogoMobile from '@/assets/logos/LogoImage.svg';
import { useRouter } from 'next/router';

const fetchDashboards = async (cursorId: number, page: number) => {
  const response = await instance.get(
    `/dashboards?navigationMethod=pagination&cursorId=${cursorId}&page=${page}&size=5`,
  );
  return response.data;
};

export default function SideMenu({ onItemClick }: SideMenuProps) {
  const [page, setPage] = useState(1);
  const [cursorId, setCursorId] = useState(1);
  const { isModalOpen, setOpenModal } = useCreateModalStore();
  const router = useRouter();

  const { isLoading, error, data } = useQuery({
    queryKey: ['dashboards', cursorId, page, 5],
    queryFn: () => fetchDashboards(cursorId, page),
  });

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const item = target.closest('[data-id]');
    const id = item?.getAttribute('data-id');

    if (id) {
      onItemClick(id);
      router.push(`/dashboard/${id}`);
    }
  };

  return (
    <section className={`${styles['side-menu']}`}>
      <div className={`${styles['side-menu-container']}`}>
        <div className={`${styles['logo-container']}`}>
          <div className={`${styles['logo-icon-wrapper']}`}>
            <Logo></Logo>
            <LogoMobile></LogoMobile>
          </div>
        </div>
        <div className={`${styles['dashboard-container']}`}>
          <div className={`${styles['dashboard-header']}`}>
            <p className={`${styles['dashboard-header-text']}`}>Dash Boards</p>
            <IconAddBox
              className={`${styles['dashboard-header-icon']}`}
              onClick={setOpenModal}
            ></IconAddBox>
          </div>
          <div
            className={`${styles['dashboard-list']}`}
            onClick={handleItemClick}
          >
            {data &&
              data.dashboards.map((item: IDashboard) => (
                <SideMenuItem
                  key={item.id}
                  dashboardId={item.id}
                  color={item.color}
                  isOwner={item.createdByMe}
                >
                  {item.title}
                </SideMenuItem>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
