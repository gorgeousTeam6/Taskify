import styles from './DashboardList.module.scss';
import Button from '@/components/Button';
import ButtonSet from '@/components/ButtonSet';
import { useQuery } from '@tanstack/react-query';
import instance from '@/services/axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MOCK_DATA = {
  cursorId: 0,
  totalCount: 6,
  dashboards: [
    {
      id: 0,
      title: 'Dashboard 1',
      color: 'blue',
      createdAt: '2024-08-05T02:06:42.125Z',
      updatedAt: '2024-08-05T02:06:42.125Z',
      createdByMe: true,
      userId: 0,
    },
    {
      id: 1,
      title: 'Dashboard 2',
      color: 'green',
      createdAt: '2024-08-05T02:06:42.125Z',
      updatedAt: '2024-08-05T02:06:42.125Z',
      createdByMe: false,
      userId: 0,
    },
    {
      id: 2,
      title: 'Dashboard 3',
      color: 'red',
      createdAt: '2024-08-05T02:06:42.125Z',
      updatedAt: '2024-08-05T02:06:42.125Z',
      createdByMe: true,
      userId: 0,
    },
    {
      id: 3,
      title: 'Dashboard 4',
      color: 'yellow',
      createdAt: '2024-08-05T02:06:42.125Z',
      updatedAt: '2024-08-05T02:06:42.125Z',
      createdByMe: true,
      userId: 0,
    },
    {
      id: 4,
      title: 'Dashboard 5',
      color: 'purple',
      createdAt: '2024-08-05T02:06:42.125Z',
      updatedAt: '2024-08-05T02:06:42.125Z',
      createdByMe: false,
      userId: 0,
    },
  ],
};

const fetchDashboards = async (cursorId: number, page: number) => {
  const response = await instance.get(
    `/dashboards?navigationMethod=pagination&cursorId=${cursorId}&page=${page}&size=6`,
  );
  return response.data;
};

function DashboardList() {
  const [page, setPage] = useState(1);
  const [cursorId, setCursorId] = useState(1);
  const router = useRouter();

  const { isLoading, error, data } = useQuery({
    queryKey: ['dashboards', cursorId, page, 6],
    queryFn: () => fetchDashboards(cursorId, page),
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleClickDashboard = (dashboardId: number) => {
    router.push(`/dashboard/${dashboardId}`);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['dash-board-list']}>
        <Button buttonType='add-board'>새로운 대시보드</Button>
        {MOCK_DATA.dashboards.map((item) => (
          <Button
            key={item.id}
            buttonType='dashboard'
            isOwner={item.createdByMe}
            onClick={() => handleClickDashboard(item.id)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className={styles['pagination']}>
        <div>
          <span>1 </span>페이지 중 <span> 1</span>
        </div>
        <ButtonSet buttonSetType='pagenation'>
          <Button buttonType='pagenation'></Button>
          <Button buttonType='pagenation'></Button>
        </ButtonSet>
      </div>
    </div>
  );
}

export default DashboardList;
