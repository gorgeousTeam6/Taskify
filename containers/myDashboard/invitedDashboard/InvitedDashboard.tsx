import InviteListItem from '../InviteListItem/InviteListItem';
import styles from './InvitedDashboard.module.scss';
import { IconEmptyInvitation, IconSearch } from '@/assets/icongroup';
import { useQuery } from '@tanstack/react-query';
import instance from '@/services/axios';

function InvitedDashboard() {
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
      {data && data.invitations.length > 0 ? (
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
              {data.invitations.map((item: Invitation) => (
                <InviteListItem key={item.id} item={item} />
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
