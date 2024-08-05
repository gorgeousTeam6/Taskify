import InviteListItem from '../InviteListItem/InviteListItem';
import styles from './InvitedDashboard.module.scss';
import { IconEmptyInvitation, IconSearch } from '@/assets/icongroup';
import { useQuery } from '@tanstack/react-query';
import instance from '@/services/axios';

const MOCK_DATA = {
  cursorId: 0,
  invitations: [
    {
      id: 0,
      inviter: {
        nickname: 'Alice',
        email: 'alice@example.com',
        id: 1,
      },
      teamId: 'team1',
      dashboard: {
        title: 'Project Alpha',
        id: 1,
      },
      invitee: {
        nickname: 'Bob',
        email: 'bob@example.com',
        id: 2,
      },
      inviteAccepted: true,
      createdAt: '2024-08-05T17:30:09.988Z',
      updatedAt: '2024-08-05T17:30:09.988Z',
    },
    {
      id: 1,
      inviter: {
        nickname: 'Charlie',
        email: 'charlie@example.com',
        id: 3,
      },
      teamId: 'team2',
      dashboard: {
        title: 'Beta Test',
        id: 2,
      },
      invitee: {
        nickname: 'Dave',
        email: 'dave@example.com',
        id: 4,
      },
      inviteAccepted: false,
      createdAt: '2024-08-05T18:30:09.988Z',
      updatedAt: '2024-08-05T18:30:09.988Z',
    },
    {
      id: 2,
      inviter: {
        nickname: 'Eve',
        email: 'eve@example.com',
        id: 5,
      },
      teamId: 'team3',
      dashboard: {
        title: 'Gamma Launch',
        id: 3,
      },
      invitee: {
        nickname: 'Frank',
        email: 'frank@example.com',
        id: 6,
      },
      inviteAccepted: true,
      createdAt: '2024-08-05T19:30:09.988Z',
      updatedAt: '2024-08-05T19:30:09.988Z',
    },
    {
      id: 3,
      inviter: {
        nickname: 'Grace',
        email: 'grace@example.com',
        id: 7,
      },
      teamId: 'team4',
      dashboard: {
        title: 'Delta Development',
        id: 4,
      },
      invitee: {
        nickname: 'Hank',
        email: 'hank@example.com',
        id: 8,
      },
      inviteAccepted: false,
      createdAt: '2024-08-05T20:30:09.988Z',
      updatedAt: '2024-08-05T20:30:09.988Z',
    },
    {
      id: 4,
      inviter: {
        nickname: 'Ivy',
        email: 'ivy@example.com',
        id: 9,
      },
      teamId: 'team5',
      dashboard: {
        title: 'Epsilon Expansion',
        id: 5,
      },
      invitee: {
        nickname: 'Jack',
        email: 'jack@example.com',
        id: 10,
      },
      inviteAccepted: true,
      createdAt: '2024-08-05T21:30:09.988Z',
      updatedAt: '2024-08-05T21:30:09.988Z',
    },
    {
      id: 5,
      inviter: {
        nickname: 'Karen',
        email: 'karen@example.com',
        id: 11,
      },
      teamId: 'team6',
      dashboard: {
        title: 'Zeta Zone',
        id: 6,
      },
      invitee: {
        nickname: 'Leo',
        email: 'leo@example.com',
        id: 12,
      },
      inviteAccepted: false,
      createdAt: '2024-08-05T22:30:09.988Z',
      updatedAt: '2024-08-05T22:30:09.988Z',
    },
    {
      id: 6,
      inviter: {
        nickname: 'Megan',
        email: 'megan@example.com',
        id: 13,
      },
      teamId: 'team7',
      dashboard: {
        title: 'Eta Evolution',
        id: 7,
      },
      invitee: {
        nickname: 'Nina',
        email: 'nina@example.com',
        id: 14,
      },
      inviteAccepted: true,
      createdAt: '2024-08-05T23:30:09.988Z',
      updatedAt: '2024-08-05T23:30:09.988Z',
    },
  ],
};

function InvitedDashboard() {
  // 데이터 페칭 전 조건부렌더링을 위한 isInvite값
  const isInvite = 1;

  const { isLoading, error, data } = useQuery({
    queryKey: ['invitations', 1],
    queryFn: async () => {
      const response = await instance.get('/invitations?size=1');
      return response.data;
    },
  });

  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>초대받은 대시보드</h2>
      {isInvite ? (
        <>
          <div className={styles['search-wrapper']}>
            <IconSearch />
            <input type='text' placeholder='검색' />
          </div>
          <div className={styles['invite-list-table']}>
            <div className={styles['invite-list-table-header']}>
              <div className={styles['invite-list-table-header-name']}>
                이름
              </div>
              <div className={styles['invite-list-table-header-inviter']}>
                초대자
              </div>
              <div
                className={styles['invite-list-table-header-invite-accepted']}
              >
                수락 여부
              </div>
            </div>
            <div className={styles['invite-list-table-body']}>
              {MOCK_DATA.invitations.map((item) => (
                <InviteListItem item={item} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles['empty-invitation-wrapper']}>
          <div className={styles['empty-invitation']}>
            <IconEmptyInvitation />
            <p>아직 초대받은 대시보드가 없어요</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InvitedDashboard;
